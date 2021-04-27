import json
from database.models import db
from components.profile import Profile, create_profile, check_login, show_profile, change_password, delete_user
from components.project import Project, add_project, show_user_projects, close_project, keyword_search,category_search, show_all_projects, showProject, deleteProject
from components.bid import Bid, create_bid, show_user_bids, show_project_bids, drop_bid
from components.user_info import User_info, input_user_info
from flask import Flask, jsonify, request, render_template
from flask_bcrypt import Bcrypt
import requests
import pymongo


def run_routes(app):

    # @ app.route('/')
    # def hello_world():
    #     return render_template('index.html')
    
    @ app.route('/api/signup',methods=['POST'])
    def signup():
        json_request = request.get_json()
        response=create_profile(json_request['profile'])
        return jsonify(response), 201

    @ app.route('/api/login',methods=['POST'])
    def login():
        json_request = request.get_json()
        response = check_login(json_request["loginInfo"])
        return jsonify(response), 201

    @ app.route('/api/post_project', methods=['POST'])
    def post_project():
        print("adding project")
        json_request = request.get_json()
        response = add_project(json_request['project'])
        return jsonify(response), 201

    @ app.route('/api/place_bid', methods=['POST'])
    def create_new_bid():
        json_request = request.get_json()
        response = create_bid(json_request['bid'])
        return jsonify(response), 201

    @ app.route('/api/view_all_projects',methods=['GET'])
    def view_all_projects():
        response=show_all_projects()
        return jsonify(response),201

    @ app.route('/api/view_profile/<int:id>',methods=['PUT'])
    def view_profile(id):
        print("On server:" + str(id))
        response = show_profile(int(id))
        print(type(response))
        return jsonify(response),201


    @ app.route('/api/get_my_projects/<int:id>',methods=['PUT'])
    def get_my_projects(id):
        response = show_user_projects(int(id))
        return jsonify(response),201


    @ app.route('/api/get_my_bids/<int:id>',methods=['PUT'])
    def get_my_bids(id):
        response = show_user_bids(int(id))
        return jsonify(response),201

    #to be implemented
    @ app.route('/api/get_bids/<int:id>',methods=['PUT'])
    def show_bids(id):
        response = show_project_bids(int(id))
        return jsonify(response),201

    @ app.route('/api/close_project/<int:id>',methods=['PUT'])
    def close_Project(id):
        response = close_project(int(id))
        return jsonify(response),201

    # @ app.route('/api/skillwise_search',methods=['POST'])
    # def skillwise_search():
    #     json_request = request.get_json()
    #     response=category_search(json_request["skill"])
    #     return response,201
    
    @ app.route('/api/text_search',methods=['POST'])
    def text_search():
        print("Text Search")
        json_request = request.get_json()
        response=keyword_search(json_request["text"])
        print(response)
        return jsonify(response),201
    
    @ app.route('/api/password_change',methods=['POST'])
    def password_change():
        json_request = request.get_json()
        print(json_request)
        response=change_password(json_request["details"])
        return jsonify(response),201
    
    @ app.route('/api/add_user_info',methods=['POST'])
    def add_user_info():
        json_request = request.get_json()
        
        response=input_user_info(json_request["info"])
        # print(json_request["info"])
        return jsonify(response),201
    
    @ app.route('/api/delete_bid/<int:id>',methods=['PUT'])
    def delete_bid(id):
        response = drop_bid(int(id))
        return jsonify(response),201

    @ app.route('/api/disable_user/<int:id>', methods=['PUT'])
    def disable_user(id):
        print("Closing Account")
        response = delete_user(int(id))
        return jsonify(response),201

    @ app.route('/api/delete_project/<int:id>', methods=['PUT'])
    def removeProject(id):
        response = deleteProject(int(id))
        return jsonify(response), 201

    @ app.route('/api/view_project/<int:id>', methods=['PUT'])
    def viewProject(id):
        response = showProject(int(id))
        return jsonify(response), 201