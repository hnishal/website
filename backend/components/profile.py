import json
from database.models import db
import requests
import pymongo
import shutil
from bson import json_util, ObjectId
from flask_bcrypt import generate_password_hash, check_password_hash

count=db.profiles.count()

class Profile:
    def __init__(self,info):
        self.username=info['username']
        self.email=info['email']
        self.user_id=None
        self.password=self.hash_password(info["password"])
    def hash_password(self,pw):
        return generate_password_hash(pw).decode('utf-8')
        


def create_profile(profile):
    global count
    new_profile=Profile(profile)
    count=count+1
    new_profile.user_id = count
    try:
        db.profiles.insert_one(new_profile.__dict__)
        return {
            "message":"Profile Created",
            "result":True
        }
    except:
        return {
            "message":"Username already exists.",
            "result":False
        }

    

def check_login(profile): 
    try:
        profile_data = db.profiles.find_one({"username": profile["username"]})
        boolean = check_password_hash(profile_data["password"], profile["password"])
        if boolean == True :
            return "login successful"
        else:
            return "wrong password"
    except:
        return "user dosent exist"

def show_profile(id):
    try:
        myquery= {"user_id": id}
        temp=db.profiles.find_one(myquery)
        del temp["password"]
        return json_util.dumps(temp)
    except:
        return "profile not found"

def change_password(details):
    myquery= {"user_id": details["user_id"]}
    temp=db.profiles.find_one(myquery)
    if check_password_hash(temp["password"], details["old-password"]) == True:
        db.profiles.update_one({"user_id": details["user_id"]}, {"$set": {"password": generate_password_hash(details["new-password"]).decode('utf-8')}})
        return "password changed"
    else:
        return "wrong password entered"