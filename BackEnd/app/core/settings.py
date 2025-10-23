from typing import List
from pydantic_settings import BaseSettings
from pathlib import Path

# BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):
    # Configuración general
    app_name: str = "SenaSoft"
    debug: bool = True

    # Base de datos
    database_url: str = "postgresql+asyncpg://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}"
    database_url_sync: str = "postgresql+psycopg2://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}"

    # Seguridad
    secret_key: str = "secret_key"
    algorithm: str = "HS256"

    # CORS
    allowed_origins: List[str] = ["http://localhost:5173"]
    
        
    # class Config:
    #     env_file = BASE_DIR / ".env"

        
settings = Settings()
