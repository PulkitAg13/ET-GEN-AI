from pydantic import BaseModel

class FinanceCreate(BaseModel):
    user_id: int
    income: float
    expenses: float
    savings: float
    debt: float