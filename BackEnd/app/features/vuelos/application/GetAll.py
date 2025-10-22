# UOW
from app.core.unit_of_work import UnitOfWork
# Repository
from app.features.vuelos.infrastructure.Repository import Repository
# DTOs
from app.features.vuelos.DTOs.EnumTipoVuelo import EnumTipoVuelo
# Python
from typing import Optional
from datetime import date


class GetAll:
    def __init__(self, uow: UnitOfWork):
        self.uow = uow
        self.repository = Repository(self.uow.session)

    async def execute_async(
            self, 
            ida: Optional[EnumTipoVuelo], 
            orig: Optional[str], 
            dest: Optional[str], 
            fida: Optional[date], 
            freg: Optional[date]
            ):
        return await self.repository.get_all(ida, orig, dest, fida, freg)
        