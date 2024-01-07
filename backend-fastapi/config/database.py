from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env")

mongodb_client = MongoClient(config["DB_URL"], tls=True, tlsAllowInvalidCertificates=True)

def connect_database():
   return mongodb_client[config["DB_NAME"]]
def get_collection(collection_name):
    database = connect_database() 
    return database[collection_name]

def close_database():
   mongodb_client.close()