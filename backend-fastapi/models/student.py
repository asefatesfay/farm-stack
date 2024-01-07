from pydantic import BaseModel
from typing import List

class Address(BaseModel):
    city: str
    pincode: int
    country: str

class Name(BaseModel):
    fname: str
    lname: str

class Social(BaseModel):
    type: str
    link: str

class Student(BaseModel):
    name: Name
    age: int
    address: Address
    phone: List[str]
    socials: List[Social]