from fastapi import APIRouter

router = APIRouter()

@router.get("/basic")
def tax_calc(income: float):
    if income < 500000:
        return {"tax": 0}
    elif income < 1000000:
        return {"tax": income * 0.2}
    else:
        return {"tax": income * 0.3}