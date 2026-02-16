from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Funding Application Portal API",
    description="向井研究室研究費申請システム API",
    version="1.0.0"
)

# CORS設定
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Funding Application Portal API"}

@app.get("/api/health")
async def health_check():
    return JSONResponse(
        status_code=200,
        content={"status": "healthy", "service": "backend"}
    )
