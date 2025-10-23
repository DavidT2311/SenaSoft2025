# UOW
from app.core.unit_of_work import UnitOfWork
# Repository
from app.features.pasajeros.infrastructure.Repository import Repository
# Application
from app.features.pasajeros.application.GetByEmail import GetByEmail
# DTOs
from app.features.pasajeros.DTOs.PassengerListDTO import PassengerListDTO
from app.features.asientos.DTOs.SendDTO import SendDTO as AsientosSendDTO
# Python
from datetime import date
# FastAPI
from fastapi import HTTPException


class Add:
    def __init__(self, uow: UnitOfWork):
        self.uow = uow
        self.repository = Repository(self.uow.session)

    async def execute_async(self, passenger_list: PassengerListDTO):
        get_by_email = GetByEmail(self.uow)

        if len(passenger_list) > 5:
            raise HTTPException(400, "No se pueden agregar mas de 5 pasajeros")
        
        for passenger in passenger_list.lista_pasajeros:
            passenger_in_db = await get_by_email.execute_async(passenger.correo)

            if passenger_in_db:
                continue

            # Calculamos la edad
            edad = date.today() - passenger.fecha_nacimiento
            
            # Validamos si es un infante
            if (edad.days / 365) < 3:
                passenger.infante = True
            else: 
                passenger.infante = False

            await self.repository.add(passenger)
        
        return "Pasajeros agregados"
