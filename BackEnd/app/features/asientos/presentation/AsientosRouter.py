# FastAPI
from fastapi import APIRouter
# UOW
from app.core.unit_of_work import UnitOfWork
# Application
from app.features.asientos.application.GetAll import GetAll
from app.features.asientos.application.Add import Add
# DTOs
from app.features.asientos.DTOs.SendDTO import SendDTO


router = APIRouter()


@router.get('/asientos')
async def get_all():
    async with UnitOfWork() as uow:
        use_case = GetAll(uow)
        return await use_case.execute_async()
    
    
@router.post('/asientos')
async def add(seat: SendDTO):
    async with UnitOfWork() as uow:
        use_case = Add(uow)
        return await use_case.execute_async(seat)
