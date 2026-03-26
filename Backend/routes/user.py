from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.database import SessionLocal
from models.user_model import User
from schemas.user_schema import UserCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(name=user.name, age=user.age)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user