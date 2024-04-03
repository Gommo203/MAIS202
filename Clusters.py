import numpy as np
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
from dataV2 import aggregate_cocktails, create_ingredient_index, create_label_encoder, create_matrices

# Load the data
file_path = 'archive\data_cocktails_compressed-labeled.csv'
cocktails = aggregate_cocktails(file_path)
ingredient_index = create_ingredient_index(cocktails)
label_encoder = create_label_encoder(cocktails)

# Create the combined matrix which includes all features for clustering
_, _, combined_matrix, drink_to_idx = create_matrices(cocktails, ingredient_index, label_encoder)

# Separate the features from the labels
X = combined_matrix[:, 1:]  # Features
COCKTAIL_NAMES = np.array(list(drink_to_idx.keys()))  # Cocktail names as an array for indexing

# Normalize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Reduce dimensionality
pca = PCA(n_components=0.9)  # Keep 90% of variance
X_PCA = pca.fit_transform(X_scaled)

# Cluster the cocktails
n_clusters = 100
kmeans = KMeans(n_clusters=n_clusters, random_state=42)
CLUSTERS = kmeans.fit_predict(X_PCA)

# Function to recommend similar cocktails
def recommend_cocktails(target, num_recommendations=3):
    target_idx = np.argwhere(COCKTAIL_NAMES == target)[0][0]
    target_cluster = CLUSTERS[target_idx]
    cluster_indices = np.where(CLUSTERS == target_cluster)[0]
    
    # Exclude the target cocktail
    cluster_indices = cluster_indices[cluster_indices != target_idx]
    
    # Find closest cocktails within the cluster
    distances = np.linalg.norm(X_PCA[cluster_indices] - X_PCA[target_idx], axis=1)
    nearest_indices = np.argsort(distances)[:num_recommendations]
    
    return COCKTAIL_NAMES[cluster_indices][nearest_indices]

# Example: Recommend cocktails similar to "Margarita"
print(recommend_cocktails('Margarita'))

# # Optional: Plot the CLUSTERS
# plt.figure(figsize=(14, 7))
# plt.scatter(X_PCA[:, 0], X_PCA[:, 1], c=CLUSTERS, cmap='viridis', alpha=0.5)
# plt.xlabel('Principal Component 1')
# plt.ylabel('Principal Component 2')
# plt.title('Cocktail CLUSTERS Visualization')
# plt.colorbar()
# plt.show()
