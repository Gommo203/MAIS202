import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split


def aggregate_cocktails(file_path):
    df = pd.read_csv(file_path)
    cocktails = {}

    for _, row in df.iterrows():
        name = row['strDrink']
        ingredient = row['Alc_type'] if pd.notnull(row['Alc_type']) else row['strIngredients']

        if pd.notnull(row['Value_ml']):
            value_ml = row['Value_ml']  

        elif pd.notnull(row['Value_gr']):
            value_ml = row['Value_gr'] 

        elif row['Garnish_type'] == "top up":
            value_ml = 25.0

        else:
            value_ml = 10.0

        taste_label = row['Basic_cocktail_taste'] if pd.notnull(row['Basic_cocktail_taste']) and row['Basic_cocktail_taste'].strip() != "" else None

        if name not in cocktails:
            cocktails[name] = {'ingredients': {}, 'label': taste_label}
        
        # If ingredient already exists, add the new value to the existing value
        if ingredient in cocktails[name]['ingredients']:
            cocktails[name]['ingredients'][ingredient] += float(value_ml)
        else:
            cocktails[name]['ingredients'][ingredient] = float(value_ml)

    return cocktails


def create_ingredient_index(cocktails):
    unique_ingredients = set()
    for cocktail in cocktails.values():
        unique_ingredients.update(cocktail['ingredients'].keys())
    return {ingredient: idx for idx, ingredient in enumerate(unique_ingredients)}

def create_label_encoder(cocktails):
    unique_labels = set(filter(None, (cocktail['label'] for cocktail in cocktails.values())))
    return {label: idx for idx, label in enumerate(unique_labels)}

def create_matrices(cocktails, ingredient_index, label_encoder):
    num_drinks = len(cocktails)
    num_ingredients = len(ingredient_index)
    # Initialize combined_matrix with dtype=int to store integer values
    combined_matrix = np.zeros((num_drinks, num_ingredients + 1), dtype=int)  # +1 for label column
    
    drink_to_idx = {}
    labeled_indices = []
    unlabeled_indices = []
    idx = 0
    
    for name, data in cocktails.items():
        # Initialize ingredients_vector with dtype=int
        ingredients_vector = np.zeros(num_ingredients, dtype=int)
        for ingredient, value in data['ingredients'].items():
            ing_idx = ingredient_index.get(ingredient)
            if ing_idx is not None:
                # Round value and explicitly convert to int, though dtype=int already enforces integer values
                ingredients_vector[ing_idx] = int(round(value))
        
        # Handle the label
        if data['label'] is not None and data['label'] in label_encoder:
            label_idx = label_encoder[data['label']] + 1  # +1 so that 0 can denote unlabeled
            labeled_indices.append(idx)
        else:
            label_idx = 0  # Unlabeled
            unlabeled_indices.append(idx)
        
        combined_matrix[idx, 0] = label_idx  # First column for label index
        combined_matrix[idx, 1:] = ingredients_vector  # The rest for ingredients
        drink_to_idx[name] = idx
        idx += 1
    
    # Extract labeled and unlabeled matrices based on indices
    labeled_matrix = combined_matrix[labeled_indices, :]
    # For unlabeled_matrix, exclude the label column. Use .copy() to ensure a proper separate array
    unlabeled_matrix = combined_matrix[unlabeled_indices, 1:].copy() 
    
    return labeled_matrix, unlabeled_matrix, combined_matrix, drink_to_idx

def lookup_drink_by_name(drink_name, drink_to_idx, matrix):
    idx = drink_to_idx.get(drink_name)
    if idx is not None:
        return matrix[idx]
    else:
        return "Drink not found."

def get_processed_data():
    file_path = 'archive\data_cocktails_compressed-labeled.csv'
    cocktails = aggregate_cocktails(file_path)
    ingredient_index = create_ingredient_index(cocktails)
    label_encoder = create_label_encoder(cocktails)
    labeled_matrix, _, combined_matrix, _ = create_matrices(cocktails, ingredient_index, label_encoder)

    # Assuming the first column of labeled_matrix is the labels
    X = labeled_matrix[:, 1:]  # Features
    y = labeled_matrix[:, 0]   # Labels

    # Split the data into training and validation sets
    X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

    return X_train, X_val, y_train, y_val



if __name__=="__main__":

    file_path = 'archive\data_cocktails_compressed-labeled.csv'
    cocktails = aggregate_cocktails(file_path)
    ingredient_index = create_ingredient_index(cocktails)
    label_encoder = create_label_encoder(cocktails)
    labeled_matrix, unlabeled_matrix, combined_matrix, drink_to_idx = create_matrices(cocktails, ingredient_index, label_encoder) 