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
        self.type=info['type']
        self.user_id=None
        self.password=self.hash_password(info["password"])
    def hash_password(self,pw):
        return generate_password_hash(pw).decode('utf-8')
        


def create_profile(profile):
    global count
    
    try:
        new_profile=Profile(profile)
        count=count+1
        new_profile.user_id = count
        print(profile)
        db.profiles.insert_one(new_profile.__dict__)
        return {
            "message":"Profile Created",
            "result":True,
            "user_id":new_profile.user_id
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
            del profile_data["_id"]
            print(profile_data)
            return profile_data
        else:
            return False
    except:
        return "user dosent exist"

def show_profile(id):
    try:
        print("Showing profile:" + str(id))
        myquery= {"user_id": id}
        temp=db.profiles.find_one(myquery)
        del temp["_id"]
        temp1=db.user_info.find_one(myquery)
        del temp1["_id"]
        del temp["password"]
        temp2=temp | temp1
        return json.dumps(temp2)
    except:
        return "profile not found"

def change_password(details):
    print(details)
    myquery= {"user_id": int(details["user_id"])}
    temp=db.profiles.find_one(myquery)
    print(temp["password"])
    print(details["old_password"])
    if check_password_hash(temp["password"], details["old_password"]) == True:
        db.profiles.update_one({"user_id": details["user_id"]}, {"$set": {"password": generate_password_hash(details["new_password"]).decode('utf-8')}})
        return "password changed"
    else:
        return "wrong password entered"

def delete_user(id):
    try:
        print("Deleting profile")
        myquery= {"user_id":id}
        db.profiles.delete_one(myquery)
        db.bids.delete_many(myquery)
        db.projects.delete_many(myquery)
        return True
    except:
        return False