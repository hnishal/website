import pymongo 
from .db import db
import json
from collections import OrderedDict

# temporary used for dropping previos database
db.profiles.drop()
db.bids.drop()
db.projects.drop()
db.user_info.drop()

#defining profiles collection for storing basic login details
db.create_collection("profiles")


f1 = open('./backendv2/database/profile.json', 'r')
with f1 as j:
    d = json.loads(j.read())
d = OrderedDict(d)
db.command(d)

db.profiles.create_index("user_id",unique =True)
db.profiles.create_index("username",unique =True)
db.profiles.create_index("email",unique =True)


#defining bids collection to store all data related to bids
db.create_collection("bids")

f1 = open('./backendv2/database/bid.json', 'r')
with f1 as j:
    d = json.loads(j.read())
d = OrderedDict(d)
db.command(d)



#defining projects collection to store data relating projects
db.create_collection("projects")

f1 = open('./backendv2/database/project.json', 'r')
with f1 as j:
    d = json.loads(j.read())
d = OrderedDict(d)

db.command(d)

db.projects.create_index([('name', 'text'),('description','text')], default_language='english')


#creating collection to store user information
db.create_collection("user_info")
f1 = open('./backendv2/database/user_info.json', 'r')
with f1 as j:
    d = json.loads(j.read())
d = OrderedDict(d)

db.command(d)

