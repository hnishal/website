import json
from flask import Flask, jsonify, request
import requests
import pymongo
from database.models import db
from bson import json_util, ObjectId
from datetime import datetime
import logging


count = db.bids.count()

class Bid:
    def __init__(self, bid):
        self.bid_id = None
        self.amount = bid['amount']
        self.days = bid['days']
        self.proposal = bid['proposal']
        self.project_id = bid['project_id']
        self.user_id = bid['user_id']
        now=datetime.now()
        self.date= now.strftime("%m/%d/%Y, %H:%M:%S")


def create_bid(bid):
    global count #implement (user_id,project_id) != new(user_id,project_id)
    count += 1
    new_bid = Bid(bid)
    new_bid.bid_id = count
    db.bids.insert_one(new_bid.__dict__)
    return "bid-created"

def drop_bid(id):
    try:
        if(db.bids.find_one({"bid_id":id}) != None):
            db.bids.remove({"bid_id":id})
            return True
        else:
            return "bid dosent exist"
    except:
        return logging.exception("Error occured while printing GeeksforGeeks")

# def check_bid_status():
#     return None

def show_user_bids(id):
    myquery= {"user_id":id}
    mycursor= db.bids.find(myquery)
    list1=[]
    for item in mycursor:
        del item['_id']
        myquery = {"project_id": item['project_id']}
        project = db.projects.find_one(myquery)
        item["project"] = project["project_name"]
        list1.append(item)
    if not list1:
        return False
    else:
        return list1

def show_project_bids(id):
    myquery= {"project_id":id}
    mycursor= db.bids.find(myquery)
    list1=[]
    for item in mycursor:
        del item['_id']
        myquery = {"user_id": item['user_id']}
        user = db.profiles.find_one(myquery)
        item["user"] = user["username"]
        list1.append(item)
    if not list1:
        return "no data found"
    else:
        return list1