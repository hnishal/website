import json
from database.models import db
from flask import Flask, jsonify, request
from bson import json_util, ObjectId
import requests
import pymongo
import shutil
import time
from datetime import datetime
import logging

count = db.projects.count()


class Project:
    def __init__(self, project):
        self.project_name = project['project_name']
        self.project_id = None
        self.description = project['description']
        self.skills = project['skills']
        self.status = "open"
        self.user_id = project['user_id']
        self.date= datetime.today()
        # add file upload

    def reopen_project(self):
        self.status = True

    def add_bid(self, bid):
        new_bid = create_bid(bid)
        self.bids.append(new_bid)
        return 'success1'

def close_project(id):
    myquery= {"project_id": id}
    newvalues={"$set":{"status":"closed"}}
    db.projects.update_one(myquery, newvalues)
    return "success"

def get_status(id):
    myquery= {"project_id": id}
    mycursor=db.projects.find_one(myquery)
    return jsonify(mycursor['status'])

def add_project(project):
    global count
    count += 1
    try:
        if(db.profiles.find_one({"user_id" : project['user_id']}) != None ):
            new_project = Project(project)
            new_project.project_id = count
            db.projects.insert_one(new_project.__dict__)
            return "project created"
        else:
            return "no such profile exists"
    except:
        return logging.exception("Error occured while printing GeeksforGeeks")

def show_user_projects(id):
    try:
        myquery= {"user_id":id}
        mycursor= db.projects.find(myquery)
        list1=[]
        for item in mycursor:
            list1.append(item)
        if not list1:
            return "no data found"
        else:
            return json_util.dumps(list1)
    except:
        return logging.exception("Error occured while printing GeeksforGeeks")

def category_search(skill):
    try:
        mycursor= db.projects.find()
        list1=[]
        for item in mycursor:
            arr=item["skills"]
            if skill in arr:
                list1.append(item)
        if not list1:
                return "no data found"
        else:
            return json_util.dumps(list1)
    except:
        return logging.exception("Error occured while printing GeeksforGeeks")

def keyword_search(text):
    try:
        mycursor=db.projects.find( { '$text': { '$search': text } } )
        list1=[]
        for item in mycursor:
            list1.append(item)
        if not list1:
            return "no data found"
        else:
            return json_util.dumps(list1)
    except:
        return logging.exception("Error occured while printing GeeksforGeeks")