# FastAPI
from fastapi import APIRouter
# UOW
from app.core.unit_of_work import UnitOfWork
# Application
from app.features.vuelos.application.GetAll import GetAll
# from app.features.vuelos.application.Add import Add
# DTOs
from app.features.vuelos.DTOs.SendDTO import SendDTO


router = APIRouter()


@router.get('/vuelos')
async def get_all():
    async with UnitOfWork() as uow:
        use_case = GetAll(uow)
        return await use_case.execute_async()
    
    
# @router.post('/products')
# async def add(product: SendDTO):
#     async with UnitOfWork() as uow:
#         use_case = Add(uow)
#         return await use_case.execute_async(product)
