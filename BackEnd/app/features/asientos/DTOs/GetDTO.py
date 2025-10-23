# Pydantic
from pydantic import BaseModel


class GetDTO(BaseModel):
    codigo: int
    asiento: str
    codigo_avion: int
    disponible: bool = None

    
    class Config:
        from_attributes = True