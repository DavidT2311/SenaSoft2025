# UOW
from app.core.unit_of_work import UnitOfWork
# Repository
from app.features.asientos.infrastructure.Repository import Repository
# Application
from app.features.tiquetes.application.GetTicketBySeatCode import GetTicketBySeatCode


class GetSeatsByPlaneCode:
    def __init__(self, uow: UnitOfWork):
        self.uow = uow
        self.repository = Repository(self.uow.session)

    async def execute_async(self, code: int):
        get_ticket_by_seat_code = GetTicketBySeatCode(self.uow)

        seats = await self.repository.get_seats_by_plane_code(code)
        
        for seat in seats:
            ticket = await get_ticket_by_seat_code.execute_async(seat.codigo)
            if ticket:
                seat.disponible = False
            else:
                seat.disponible = True

        return seats
        