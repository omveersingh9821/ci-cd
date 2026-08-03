from fastapi import FastAPI
import socket
import os

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Hello from Kubernetes",
        "hostname": socket.gethostname()
    }


@app.get("/health")
def health():
    return {"status": "Healthy"}


@app.get("/version")
def version():
    return {
        "version": "1.0.0",
        "environment": os.getenv("ENV", "local")
    }