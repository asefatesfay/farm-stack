def student_serializer(student) -> dict:
    return {
        'id': str(student["_id"]),
        'name': student["name"],
        'age': student["age"],
        'address': student["address"],
        'phone': student["phone"],
        'socials': student["socials"]
    }

def students_serializer(students) -> list:
    return [student_serializer(student) for student in students]