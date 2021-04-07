import json
from flask import Flask, jsonify, request, render_template
from flask_bcrypt import Bcrypt
import pymongo
from routes import run_routes

app = Flask(__name__ ,static_folder="../frontend/build/static",
            template_folder="../frontend/build")
bcrypt = Bcrypt(app)

@ app.route('/')
@ app.route('/home')
@ app.route('/login')
@ app.route('/Signup')
@ app.route('/profile')
@ app.route('/Dashboard')
@ app.route('/Settings')
@ app.route('/password')
@ app.route('/account')
@ app.route('/myprojects')
def hello_world():
    return render_template('index.html')


run_routes(app)
app.run(host='0.0.0.0', port=5000)