import json
from flask import Flask, jsonify, request, render_template
from flask_bcrypt import Bcrypt
import pymongo
from routes import run_routes

app = Flask(__name__ ,static_folder="../frontend/build/static",
            template_folder="../frontend/build")
bcrypt = Bcrypt(app)

run_routes(app)
@ app.route('/')
@ app.route('/home')
@ app.route('/login')
@ app.route('/signup')
@ app.route('/profile')
@ app.route('/dashboard')
@ app.route('/settings')
@ app.route('/password')
@ app.route('/account')
@ app.route('/myProjects')
@ app.route('/postProject')
@ app.route('/project')
@ app.route('/howWorks')
@ app.route('/SearchProjects')

def hello_world():
    return render_template('index.html')



app.run(host='0.0.0.0', port=5000)