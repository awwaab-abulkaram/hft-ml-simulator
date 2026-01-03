from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    price = request.json["price"]
    prediction = model.predict(np.array([[price]]))[0]
    return jsonify({"predicted_price": float(prediction)})

app.run(port=8000)
