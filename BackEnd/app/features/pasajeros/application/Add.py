# UOW
from app.core.unit_of_work import UnitOfWork
# Repository
from app.features.pasajeros.infrastructure.Repository import Repository
# DTOs
from app.features.pasajeros.DTOs.SendDTO import SendDTO
# Python
from datetime import date


class Add:
    def __init__(self, uow: UnitOfWork):
        self.uow = uow
        self.repository = Repository(self.uow.session)

    async def execute_async(self, passenger: SendDTO):
        # Calculamos la edad
        edad = date.today() - passenger.fecha_nacimiento
        
        # Validamos si es un infante
        if (edad.days / 365) < 3:
            passenger.infante = True
        else: 
            passenger.infante = False
        
        return await self.repository.add(passenger)
