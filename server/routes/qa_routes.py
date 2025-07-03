from fastapi import APIRouter
import json
import os

router = APIRouter()

@router.get("/questions")
def get_questions():
    qa_path = os.path.join(os.path.dirname(__file__), "../constitution/constitution_qa.json")
    with open(qa_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data
