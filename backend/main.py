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

#wokring code return point 
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi import FastAPI
# from pydantic import BaseModel
# import random
# import time
# import smtplib
# from email.mime.text import MIMEText
# from dotenv import load_dotenv
# import os

# load_dotenv()

# EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
# EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],  # React Vite URL
#     allow_credentials=True,
#     allow_methods=["*"],  # allows OPTIONS, POST, GET, etc.
#     allow_headers=["*"],
# )


# otp_store = {}  # In-memory for academic project

# class OTPRequest(BaseModel):
#     email: str

# class OTPVerify(BaseModel):
#     email: str
#     otp: str

# def send_email(receiver_email, otp):
#     msg = MIMEText(f"""
# Dear Voter,

# Your One-Time Password (OTP) for CivicChain Voting System is:

# {otp}

# This OTP is valid for 5 minutes. Do not share it with anyone.

# Regards,
# CivicChain Election Authority
# """)
#     msg["Subject"] = "CivicChain Voting OTP"
#     msg["From"] = EMAIL_ADDRESS
#     msg["To"] = receiver_email

#     with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
#         server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
#         server.send_message(msg)

# @app.post("/send-otp")
# def send_otp(data: OTPRequest):
#     otp = str(random.randint(100000, 999999))
#     otp_store[data.email] = {
#         "otp": otp,
#         "timestamp": time.time()
#     }

#     send_email(data.email, otp)

#     return {"message": "OTP sent successfully"}

# @app.post("/verify-otp")
# def verify_otp(data: OTPVerify):
#     record = otp_store.get(data.email)

#     if not record:
#         return {"status": "failed", "reason": "OTP not found"}

#     if time.time() - record["timestamp"] > 300:
#         return {"status": "failed", "reason": "OTP expired"}

#     if record["otp"] == data.otp:
#         del otp_store[data.email]
#         return {"status": "success"}

#     return {"status": "failed", "reason": "Invalid OTP"}

#updated code with registration
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
import time
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

# DB & Security imports
from database import get_db, init_db
from models import RegisterUserRequest
from security import hash_password

# Load env
load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

app = FastAPI()

# Initialize DB ONCE
init_db()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React Vite URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- OTP SECTION ---------------- #

otp_store = {}  # In-memory (academic project)

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

# ---------------- REGISTRATION SECTION ---------------- #

@app.post("/register-user")
def register_user(data: RegisterUserRequest):
    conn = get_db()
    cursor = conn.cursor()

    # Check duplicate email or voter ID
    cursor.execute(
        "SELECT id FROM voters WHERE email = ? OR voter_id = ?",
        (data.email, data.voterId)
    )
    existing = cursor.fetchone()

    if existing:
        conn.close()
        raise HTTPException(
            status_code=400,
            detail="User with this email or voter ID already exists"
        )

    # Hash password
    password_hash = hash_password(data.password)

    # Insert voter
    cursor.execute("""
        INSERT INTO voters (name, email, voter_id, password_hash)
        VALUES (?, ?, ?, ?)
    """, (
        data.name,
        data.email,
        data.voterId,
        password_hash
    ))

    conn.commit()
    conn.close()

    return {
        "status": "success",
        "message": "Voter registered successfully"
    }
