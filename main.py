from flask import Flask, request, jsonify, render_template
from Clusters import recommend_cocktails 

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/cocktails/get-recommendations/<cocktail_name>")
def get_recommendations(cocktail_name):
    recommendations = recommend_cocktails(cocktail_name)
    recommendations = recommendations.tolist()
    return jsonify(recommendations), 200
    
if __name__ == "__main__":
    app.run(debug=True)
