# Pydantic
from pydantic import BaseModel
# Python
from datetime import date


class SendDTO(BaseModel):
    codigo_vuelo: int
    fecha: date
