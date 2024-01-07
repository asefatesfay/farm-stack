from fastapi import FastAPI
import uvicorn
from dotenv import dotenv_values
from pymongo import MongoClient
from contextlib import asynccontextmanager
from config.database import connect_database, close_database, get_collection
from routes.user import user
from routes.student import student_router
from models.student import Student



# Those will be exported to their own models
from bson import ObjectId

config = dotenv_values(".env")

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.database = connect_database()
    print("Connected to the MongoDB database!")
    yield
    # Close the connection to the database
    close_database()
    print("Closed MongoDB connection")

USE_LIFESPAN = True

app = FastAPI(lifespan=lifespan if USE_LIFESPAN else None)

app.include_router(user)
app.include_router(student_router)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        reload=config['DEBUG_MODE'],
    )