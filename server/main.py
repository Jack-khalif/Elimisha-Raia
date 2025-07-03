from fastapi import FastAPI
from routes.qa_routes import router as qa_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS (frontend-backend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect your Q&A API routes
app.include_router(qa_router, prefix="/api")
