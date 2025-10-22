# FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Settings
from app.core.settings import settings

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

