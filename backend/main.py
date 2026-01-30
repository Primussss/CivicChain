# from fastapi import FastAPI
# from pydantic import BaseModel
# import random
# import time

# app = FastAPI()

# # TEMP in-memory store (exam-safe)
# otp_store = {}

# class OTPRequest(BaseModel):
#     email: str

# class OTPVerify(BaseModel):
#     email: str
#     otp: str

# @app.post("/send-otp")
# def send_otp(data: OTPRequest):
#     otp = str(random.randint(100000, 999999))
#     otp_store[data.email] = {
#         "otp": otp,
#         "time": time.time()
#     }

#     print(f"OTP for {data.email}: {otp}")  # EMAIL MOCK
#     return {"message": "OTP sent"}

# @app.post("/verify-otp")
# def verify_otp(data: OTPVerify):
#     record = otp_store.get(data.email)

#     if not record:
#         return {"status": "failed"}

#     if record["otp"] == data.otp:
#         return {"status": "success"}

#     return {"status": "failed"}
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
import random
import time
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React Vite URL
    allow_credentials=True,
    allow_methods=["*"],  # allows OPTIONS, POST, GET, etc.
    allow_headers=["*"],
)


otp_store = {}  # In-memory for academic project

class OTPRequest(BaseModel):
    email: str

class OTPVerify(BaseModel):
    email: str
    otp: str

def send_email(receiver_email, otp):
    msg = MIMEText(f"""
Dear Voter,

Your One-Time Password (OTP) for CivicChain Voting System is:

{otp}

This OTP is valid for 5 minutes. Do not share it with anyone.

Regards,
CivicChain Election Authority
""")
    msg["Subject"] = "CivicChain Voting OTP"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = receiver_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

@app.post("/send-otp")
def send_otp(data: OTPRequest):
    otp = str(random.randint(100000, 999999))
    otp_store[data.email] = {
        "otp": otp,
        "timestamp": time.time()
    }

    send_email(data.email, otp)

    return {"message": "OTP sent successfully"}

@app.post("/verify-otp")
def verify_otp(data: OTPVerify):
    record = otp_store.get(data.email)

    if not record:
        return {"status": "failed", "reason": "OTP not found"}

    if time.time() - record["timestamp"] > 300:
        return {"status": "failed", "reason": "OTP expired"}

    if record["otp"] == data.otp:
        del otp_store[data.email]
        return {"status": "success"}

    return {"status": "failed", "reason": "Invalid OTP"}
