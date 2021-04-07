import json
from flask import Flask, jsonify, request, render_template
from flask_bcrypt import Bcrypt
import pymongo
from routes import run_routes

app = Flask(__name__ ,static_folder="../first-app/build/static",
            template_folder="../first-app/build")
bcrypt = Bcrypt(app)

@ app.route('/')
def hello_world():
    return render_template('index.html')


run_routes(app)
app.run(host='0.0.0.0', port=5000)