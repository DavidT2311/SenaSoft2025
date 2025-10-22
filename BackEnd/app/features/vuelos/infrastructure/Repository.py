# Python
from typing import List
# SQLAlchemy
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
# Context
from app.context.SenaSoftContext import Vuelos
# DTOs
from app.features.vuelos.DTOs.GetDTO import GetDTO
from app.features.vuelos.DTOs.SendDTO import SendDTO
# Model
from app.features.vuelos.domain.Model import VuelosModel


class Repository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_all(self):
        flights_list = await self.db.execute(select(Vuelos))
        flights_list = flights_list.scalars().all()

        return [GetDTO.model_validate(flight) for flight in flights_list]

    async def add(self, flight: SendDTO):
        new_flight = Vuelos(**flight.dict())
        self.db.add(new_flight)

        try:
            await self.db.flush()
            return VuelosModel.model_validate(new_flight)
        except:
            raise

    async def get_by_code(self, code: int):
        flight = await self.__get_by_code(code)

        if not flight:
            raise

        return VuelosModel.model_validate(flight)

    async def __get_by_code(self, code: int):
        flight = await self.db.execute(select(Vuelos).where(Vuelos.codigo == code))
        flight = flight.scalars().first()

        if not flight:
            raise

        return flight

