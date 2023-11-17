import base64
from io import BytesIO
from datetime import datetime
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np
from PIL import Image
from pymongo import MongoClient
import os
import requests
import json

app = Flask(__name__)
cors = CORS(app)

mongo = MongoClient(os.getenv("MONGO_URI"))
db = mongo[os.getenv("MONGO_DBNAME")]
res = db['result']

url = os.getenv("PREDICT_URL")+"/v1/models/dog_breed_classification/labels/stable:predict"
image_size=(180,180)

# Function to perform prediction using tensorflow serving
def predict(img,url,img_size=image_size):
    test_img=np.expand_dims(np.array(img.resize(img_size)),0)
    payid = json.dumps({"instances":test_img.tolist()})
    headers = {"content-type": "application/json"}
    json_response = requests.post(url, data = payid, headers = headers)
    res=json_response.json()
    return np.squeeze(res['predictions'])

# Function to insert document into MongoDB
def insert_document(document):
    collection_size = res.count_documents({})
    if collection_size < 10:
        res.insert_one(document)
    else:
        oldest_document = res.find_one({}, sort=[('date', 1)])
        res.delete_one({'date': oldest_document['date']})
        res.insert_one(document)

# Get main page
@app.route('/', methods=['GET'])
def hello():
    return render_template('index.html')


# Perform prediction
@app.route('/livepredict', methods=['POST'])
def classify():
    frame = request.json["frame"]
    img = Image.open(BytesIO(base64.b64decode(frame.split(",")[1])))
    prediction = predict(img,url)
    preds = 0
    x = max(prediction)
    if x > 0.999:
        preds = int(np.argmax(prediction))
    else:
        preds = -1
    print(preds)
    if preds != -1:
        document = {
            'index': preds,
            'date': datetime.now()
        }
        insert_document(document)
    return jsonify({'result': preds})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)