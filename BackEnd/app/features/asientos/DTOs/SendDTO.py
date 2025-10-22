# Pydantic
from pydantic import BaseModel


class SendDTO(BaseModel):
    asiento: int
    codigo_vuelo: int
