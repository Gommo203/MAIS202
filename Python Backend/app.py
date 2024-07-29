from flask import Flask, request, jsonify
from Clusters import recommend_cocktails
from dataV2 import aggregate_cocktails
import numpy as np

app = Flask(__name__)

# Load and aggregate the cocktails data
filepath = 'archive/data_cocktails_compressed-labeled.csv'
cocktails = aggregate_cocktails(filepath)

@app.route('/recommend', methods=['GET'])
def recommend():
    cocktail = request.args.get('cocktail')
    if not cocktail:
        return jsonify({"error": "No cocktail provided"}), 400
    
    recommendations = recommend_cocktails(cocktail)
    
    # Convert ndarrays in recommendations to lists
    if isinstance(recommendations, np.ndarray):
        recommendations = recommendations.tolist()
    elif isinstance(recommendations, dict):
        recommendations = {k: v.tolist() if isinstance(v, np.ndarray) else v for k, v in recommendations.items()}
    
    return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)
