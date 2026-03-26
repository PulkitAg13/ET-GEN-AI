from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.database import SessionLocal
from models.finance_model import Finance
from schemas.finance_schema import FinanceCreate
from services.scoring import calculate_score
from services.sip_calc import calculate_sip

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/add")
def add_finance(data: FinanceCreate, db: Session = Depends(get_db)):
    fin = Finance(**data.dict())
    db.add(fin)
    db.commit()
    db.refresh(fin)
    return fin

@router.get("/score/{user_id}")
def get_score(user_id: int, db: Session = Depends(get_db)):
    fin = db.query(Finance).filter(Finance.user_id == user_id).first()

    score = calculate_score(fin.income, fin.expenses, fin.savings, fin.debt)

    return {"score": score}

@router.get("/sip/{user_id}")
def sip_plan(user_id: int, db: Session = Depends(get_db)):
    fin = db.query(Finance).filter(Finance.user_id == user_id).first()

    sip = calculate_sip(5000, 12, 60)

    return {"future_value": sip}