from fastapi import APIRouter
from models.user import User
from schemas.user import users_serializer
from bson import ObjectId
from config.database import  get_collection

user = APIRouter()

users_collection = get_collection("users")

@user.post("/user")
async def create_user(user: User):
    _id = users_collection.insert_one(dict(user))
    user = users_serializer(users_collection.find({"_id": _id.inserted_id}))
    return {"status": "OK", "data": user}

@user.get("/user")
async def find_all_users():
    users = users_serializer(users_collection.find())
    return {"status": "OK", "data": users}

@user.get("/user/{id}")
async def get_one_user(id: str):
    user = users_serializer(users_collection.find({"_id": ObjectId(id)}))
    return {"status": "Ok", "data": user}