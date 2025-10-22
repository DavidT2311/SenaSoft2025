# Pydantic
from pydantic import BaseModel


class AsientosModel(BaseModel):
    codigo: int
    asiento: int
    codigo_vuelo: int


    class Config:
        from_attributes = True
