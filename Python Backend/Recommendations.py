from Clusters import recommend_cocktails
from dataV2 import aggregate_cocktails
import json

if __name__ == "__main__":    
    
    filepath = 'archive\data_cocktails_compressed-labeled.csv'
    cocktails = aggregate_cocktails(filepath)
    recommendations = {}

    for cocktail in cocktails:
        recommendation = recommend_cocktails(cocktail)
        recommendations[cocktail] = recommendation.tolist()


    print (recommendations)

    with open("recommendations.json", "w") as outfile: 
        json.dump(recommendations, outfile)
