from fastapi import FastAPI
from db.database import engine, Base

from routes import user, finance, advisor, tax

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user.router, prefix="/user")
app.include_router(finance.router, prefix="/finance")
app.include_router(advisor.router, prefix="/advisor")
app.include_router(tax.router, prefix="/tax")

@app.get("/")
def root():
    return {"message": "AI Money Mentor Running"}