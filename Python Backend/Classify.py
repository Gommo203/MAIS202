import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from dataV2 import get_processed_data, get_unlabeled_matrix, lookup_drink_by_name

class Net(nn.Module):
    def __init__(self, nbr_layers, neurons_per_layers, input_features, num_classes):
        super(Net, self).__init__()
        self.network = nn.ModuleList()
        self.network.append(nn.Linear(input_features, neurons_per_layers))
        for _ in range(nbr_layers - 1):
            self.network.append(nn.Linear(neurons_per_layers, neurons_per_layers))
        self.network.append(nn.Linear(neurons_per_layers, num_classes))
    
    def forward(self, x):
        for layer in self.network:
            x = F.leaky_relu(layer(x))
        return x

def train(X, y, nbr_layers, neurons_per_layers, lr, epochs=1000):
    X_tensor = torch.tensor(X, dtype=torch.float32)
    y_tensor = torch.tensor(y, dtype=torch.int64) - 1
    
    num_classes = len(torch.unique(y_tensor))
    input_features = X.shape[1]
    
    net = Net(nbr_layers, neurons_per_layers, input_features, num_classes)
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(net.parameters(), lr=lr)
    
    for epoch in range(epochs):
        optimizer.zero_grad()
        outputs = net(X_tensor)
        loss = criterion(outputs, y_tensor)
        loss.backward()
        optimizer.step()
        
    return net

def classify_dataset(model, X):
    X_tensor = torch.tensor(X, dtype=torch.float32)
    outputs = model(X_tensor)
    _, predicted = torch.max(outputs, 1)
    return predicted.numpy()


def main():
    # Load your data
    X_train, X_val, y_train, y_val = get_processed_data()
    
    # Combine training and validation sets for full training
    X_full = np.concatenate((X_train, X_val), axis=0)
    y_full = np.concatenate((y_train, y_val), axis=0)

    # Train your model with the combined dataset
    model = train(X_full, y_full, nbr_layers=3, neurons_per_layers=150, lr=0.001)
    
    # Get unlabeled data
    unlabeled_matrix = get_unlabeled_matrix()
    X_unlabeled = unlabeled_matrix  # Assuming unlabeled_matrix does not include labels

    # Classify the unlabeled dataset
    predictions = classify_dataset(model, X_unlabeled)
    
    # Combine predictions with unlabeled data to create a new matrix that includes the guessed labels
    labeled_matrix_guesses = np.hstack((predictions.reshape(-1, 1), X_unlabeled))

    # Save the new matrix to a CSV file
    np.savetxt("labeled_matrix_guesses.csv", labeled_matrix_guesses, delimiter=",", fmt='%s')

if __name__ == "__main__":
    main()


