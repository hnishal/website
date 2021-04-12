import json
from database.models import db
from flask import Flask, jsonify, request
from bson import json_util, ObjectId
import requests
import pymongo
import shutil
import time

class User_info:
    def __init__(self,info):
        self.user_id=info["user_id"]
        self.name=info["name"]
        self.contact_no=info["contact_no"]
        self.address=info["address"]
        self.edu_country=info["edu_country"]
        self.edu_university=info["edu_university"]
        self.edu_degree=info["edu_degree"]
        self.start_year=info["start_year"]
        self.finish_year=info["finish_year"]


def input_user_info(data):
    info=User_info(data)
    db.user_info.insert_one(info.__dict__)
    return "user-info-added"

# def edit_user_info(data):
