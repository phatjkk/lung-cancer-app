
# A very simple Flask Hello World app for you to get started with...

from flask import Flask,request
import pickle
import os
import sys
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    a = os.path.abspath(os.path.dirname(__file__))
    return str(sys.path)

@app.route('/test')
def test():
    GENDER = int(request.args.get('GENDER', 0))
    AGE = int(request.args.get('AGE', 0))
    SMOKING = int(request.args.get('SMOKING', 0))
    YELLOW_FINGERS = int(request.args.get('YELLOWFINGERS', 0))
    ANXIETY = int(request.args.get('ANXIETY', 0))
    PEER_PRESSURE = int(request.args.get('PEERPRESSURE', 0))
    CHRONIC_DISEASE = int(request.args.get('CHRONICDISEASE', 0))
    FATIGUE = int(request.args.get('FATIGUE', 0))
    ALLERGY = int(request.args.get('ALLERGY', 0))
    WHEEZING = int(request.args.get('WHEEZING', 0))
    ALCOHOL_CONSUMING = int(request.args.get('ALCOHOLCONSUMING', 0))
    COUGHING = int(request.args.get('COUGHING', 0))
    SHORTNESS_OF_BREATH = int(request.args.get('SHORTNESSOFBREATH', 0))
    SWALLOWING_DIFFICULTY = int(request.args.get('SWALLOWINGDIFFICULTY', 0))
    CHEST_PAIN = int(request.args.get('CHESTPAIN', 0))
    # model = joblib.load("model_lung.pkl")
    model = pickle.load(open("model_lung.pkl", 'rb'))
    x_data = [GENDER, AGE,  SMOKING,  YELLOW_FINGERS,  ANXIETY,  PEER_PRESSURE,  CHRONIC_DISEASE,  FATIGUE,  ALLERGY,WHEEZING,  ALCOHOL_CONSUMING,  COUGHING,  SHORTNESS_OF_BREATH,  SWALLOWING_DIFFICULTY,  CHEST_PAIN]
    kq = str(model.predict([x_data]))
    return kq

@app.route("/predict")
def predict():

    model = joblib.load("model_lung.pkl")
    GENDER = int(request.args.get('GENDER', 0))
    AGE = int(request.args.get('AGE', 0))
    SMOKING = int(request.args.get('SMOKING', 0))
    YELLOW_FINGERS = int(request.args.get('YELLOWFINGERS', 0))
    ANXIETY = int(request.args.get('ANXIETY', 0))
    PEER_PRESSURE = int(request.args.get('PEERPRESSURE', 0))
    CHRONIC_DISEASE = int(request.args.get('CHRONICDISEASE', 0))
    FATIGUE = int(request.args.get('FATIGUE', 0))
    ALLERGY = int(request.args.get('ALLERGY', 0))
    WHEEZING = int(request.args.get('WHEEZING', 0))
    ALCOHOL_CONSUMING = int(request.args.get('ALCOHOLCONSUMING', 0))
    COUGHING = int(request.args.get('COUGHING', 0))
    SHORTNESS_OF_BREATH = int(request.args.get('SHORTNESSOFBREATH', 0))
    SWALLOWING_DIFFICULTY = int(request.args.get('SWALLOWINGDIFFICULTY', 0))
    CHEST_PAIN = int(request.args.get('CHESTPAIN', 0))

    x_data = [GENDER, AGE,  SMOKING,  YELLOW_FINGERS,  ANXIETY,  PEER_PRESSURE,  CHRONIC_DISEASE,  FATIGUE,  ALLERGY,WHEEZING,  ALCOHOL_CONSUMING,  COUGHING,  SHORTNESS_OF_BREATH,  SWALLOWING_DIFFICULTY,  CHEST_PAIN]
    return str(model.predict([x_data]))
if __name__ == '__main__':
    app.run(threaded=False)