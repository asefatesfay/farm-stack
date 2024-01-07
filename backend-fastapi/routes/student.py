
from fastapi import APIRouter
from bson import ObjectId
from config.database import  get_collection
from models.student import Student
from schemas.student import students_serializer

student_router = APIRouter()

students_collection = get_collection("students")


@student_router.post("/student")
async def create_student(student: Student):
    try:
        student = student.dict()
        result = await students_collection.insert_one(student)
    except Exception as e:
        print(e)
    return {"message": "Student created successfully "}

@student_router.get("/students")
async def get_all_students():
    try:

        students = students_serializer(students_collection.find())
        return {"status": "OK", "data": students}
    except Exception as e:
        print(e)

@student_router.get('/student/{id}/')
async def get_student(id: str):
    student  =  students_collection.find_one({"_id": ObjectId(id)})
    if student:
        student['_id'] = str(student['_id'])
        return student
    else:
        return {"error":"Student not found"}

@student_router.put("/student/{id}/")
async def update_student(id:str, updated_data:dict):
    await students_collection.update_one({"_id":ObjectId(id)},{"$set": updated_data})
    return {"message":"Student updated succesfully"}

@student_router.delete("/student/{id}/")
async def delete_student(id:str):
    result = await students_collection.find_one({"_id":ObjectId(id)})
    if result:
        await students_collection.delete_one({"_id":ObjectId(id)})
        return {"message":"Student deleted succesfully"}
    else:
        return {"message":"The Student is unavailable"}