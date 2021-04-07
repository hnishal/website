import json
from flask import Flask, jsonify, request
import requests
import pymongo
from database.models import db
from bson import json_util, ObjectId
from datetime import datetime


count = db.bids.count()

class Bid:
    def __init__(self, bid):
        self.bid_id = None
        self.hourly_rate = bid['hourly_rate']
        self.weekly_limit = bid['weekly_limit']
        self.proposal = bid['proposal']
        self.project_id = bid['project_id']
        self.user_id = bid['user_id']
        self.date= datetime.today()


def create_bid(bid):
    global count #implement (user_id,project_id) != new(user_id,project_id)
    count += 1
    new_bid = Bid(bid)
    new_bid.bid_id = count
    db.bids.insert_one(new_bid.__dict__)
    return "bid-created"

def drop_bid(data):
    try:
        if(db.bids.find_one({"bid_id":data['bid_id']}) != None):
            db.bids.remove({"bid_id":data['bid_id']})
            return "bid removed"
        else:
            return "bid dosent exist"
    except:
        return console.log(err)

# def check_bid_status():
#     return None

def show_user_bids(id):
    myquery= {"user_id":id}
    mycursor= db.bids.find(myquery)
    list1=[]
    for item in mycursor:
        list1.append(item)
    if(~len(list1)):
                return "no data found"
    else:
        return json_util.dumps(list1)

def show_project_bids(id):
    myquery= {"project_id":id}
    mycursor= db.bids.find(myquery)
    list1=[]
    for item in mycursor:
        list1.append(item)
    if(~len(list1)):
                return "no data found"
    else:
        return json_util.dumps(list1)