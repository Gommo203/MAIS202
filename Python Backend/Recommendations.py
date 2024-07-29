from Clusters import recommend_cocktails
from dataV2 import aggregate_cocktails
import json

if __name__ == "__main__":    

    cocktail = "Sex on the Beach"
    
    filepath = 'archive\data_cocktails_compressed-labeled.csv'
    cocktails = aggregate_cocktails(filepath)
    recommendations = {}

    recommendation = recommend_cocktails(cocktail)

    print(recommendation)


    # for cocktail in cocktails:
    #     recommendation = recommend_cocktails(cocktail)
    #     recommendations[cocktail] = recommendation.tolist()


    # print (recommendations)

    # with open("recommendations.json", "w") as outfile: 
    #     json.dump(recommendations, outfile)
