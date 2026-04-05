# CivicChain  
### A Privacy-Preserving and Scalable Blockchain-Based Digital Voting System

CivicChain is a secure digital voting platform that combines **blockchain**, **biometric authentication**, and **multi-factor verification** to create a transparent, tamper-resistant, and privacy-preserving election system.

The project is designed to address critical issues in traditional and electronic voting systems such as **impersonation**, **duplicate voting**, **lack of auditability**, and **centralized trust dependencies**.

---

## Features

- **Biometric Voter Authentication**
  - Real-time facial verification
  - Blink-based liveness detection using MediaPipe FaceMesh
  - Prevents impersonation and spoofing attacks

- **OTP-Based Multi-Factor Authentication**
  - Email-based OTP verification for added voter security

- **Blockchain-Based Vote Integrity**
  - Secure vote recording using **Hyperledger Fabric**
  - Prevents vote tampering and duplicate submissions

- **Encrypted Vote Casting**
  - Votes are encrypted before storage
  - Ensures voter privacy and ballot confidentiality

- **Off-Chain Secure Storage**
  - Encrypted biometric embeddings and election-related metadata stored using **IPFS / database layer**
  - Only cryptographic references are anchored on-chain

- **Auditability and Transparency**
  - Immutable transaction records
  - Designed for verification and future audit support

---

## Problem Statement

Conventional voting systems often suffer from issues such as:

- Fake or duplicate voting
- Identity fraud / impersonation
- Centralized databases vulnerable to tampering
- Limited transparency and public verifiability
- Lack of secure digital voting mechanisms for scalable elections

CivicChain aims to solve these issues by integrating **biometric identity verification**, **OTP authentication**, and **blockchain-backed vote recording** into one unified framework.

---

## System Overview

The CivicChain architecture consists of the following layers:

### 1. **Frontend Layer**
Handles voter interaction and live verification:
- React.js user interface
- WebRTC camera integration
- MediaPipe FaceMesh for liveness detection
- Face embedding generation (planned / extendable with FaceNet / ArcFace)

### 2. **Backend Layer**
Handles core application logic:
- Node.js / FastAPI backend services
- OTP verification
- biometric verification workflow
- API integration with blockchain and storage

### 3. **Storage Layer**
Stores off-chain secure references:
- PostgreSQL / MongoDB for user metadata and OTP logs
- IPFS for encrypted biometric embeddings and election assets

### 4. **Blockchain Layer**
Ensures immutable and verifiable vote storage:
- Hyperledger Fabric
- Smart contracts / chaincode
- Membership services, certificate authority, peers, and ordering service

### 5. **Auditing Layer**
Supports verification and future transparency tools:
- Blockchain explorer
- Verification modules
- Audit trail generation

---

## Voting Workflow

### **1. Voter Registration**
- User registers with email and basic credentials
- OTP is sent for initial verification
- Live facial capture is performed
- Liveness detection ensures a real human is present
- Facial embedding is generated and securely stored off-chain
- Blockchain stores only cryptographic references

### **2. Authentication Before Voting**
- User logs in
- OTP is verified
- Face is captured again
- Liveness verification is performed
- Face embedding is matched against registered reference

### **3. Vote Casting**
- Authenticated voter selects a candidate
- Vote is encrypted
- Smart contract verifies eligibility and one-vote rule
- Encrypted vote reference is stored immutably on blockchain

### **4. Verification / Audit**
- Vote transaction can be tracked using blockchain logs
- Designed to support future auditing and election verification

---

## Tech Stack

### **Frontend**
- React.js
- JavaScript / TypeScript
- WebRTC
- MediaPipe FaceMesh
- TensorFlow.js (planned / optional for embeddings)

### **Backend**
- Node.js / Express.js
- FastAPI (optional microservices support)
- REST APIs

### **Blockchain**
- Hyperledger Fabric
- Chaincode / Smart Contracts
- Certificate Authority (CA)

### **Storage**
- PostgreSQL / MongoDB
- IPFS

### **Authentication / Security**
- OTP Verification
- JWT Tokens
- Encryption for biometric and vote data

---

## Core Algorithms Used

### **1. Blink-Based Liveness Detection**
- Uses MediaPipe FaceMesh facial landmarks
- Detects eye closure and reopening
- Verifies liveness after valid blink count

### **2. Face Embedding Verification**
- Planned integration with FaceNet / ArcFace
- Secure vector-based identity comparison

### **3. Blockchain Vote Validation**
- Smart contract ensures:
  - voter is eligible
  - voter has not already voted
  - vote is stored immutably

---

## 📂 Project Structure

```bash
CivicChain/
│
├── frontend/               # React frontend
├── backend/                # Node.js / API services
├── blockchain/             # Hyperledger Fabric config / chaincode
├── storage/                # DB schemas / IPFS-related configs
├── docs/                   # Diagrams, reports, screenshots
├── README.md
└── package.json
```

---


## Security Considerations

CivicChain is designed with the following security principles:

- No raw biometric images are stored permanently
- Biometric data is converted into secure embeddings
- Only cryptographic references are stored on-chain
- Votes are encrypted before submission
- Duplicate voting is blocked at smart contract level
- OTP + biometric verification provides layered authentication

---

## Outcomes

The system is designed to provide:

- High voter authentication reliability
- Strong spoof resistance
- Secure and immutable vote storage
- Transparent and auditable election records
- A scalable prototype for future digital governance systems

---

## Research Motivation

This project was developed as part of an academic effort to explore how **blockchain**, **biometrics**, and **secure authentication** can be combined to build next-generation election systems that are both **technically robust** and **socially trustworthy**.

---

