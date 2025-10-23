import React from "react";
import { ticketsStore } from "../context/ticketsStore";

export default function TicketPage() {
  const ticketData = {
    reservationCode: "198727772",
    total: "750,000 COP",
    flight: {
      code: "1990000292",
      seat: "15",
      origin: "MANIZALES, COLOMBIA",
      destination: "MEDELLIN, COLOMBIA",
      departureDate: "21/10/2025",
      departureTime: "8:00 A.M",
      returnDate: "28/11/2025",
      returnTime: "6:00 A.M",
    },
    passenger: {
      document: "123456789",
      name: "Juan Andres",
      firstName: "Alvárez",
      lastName: "Gutierrez",
      isChild: "No",
    },
  };

  const getTickets = ticketsStore((state) => state.getTickets);
  const ticketsList = ticketsStore((state) => state.ticketsList);

  const handleExport = () => {
    alert("Exportando ticket a PDF...");
    console.log("Exportar ticket:", ticketData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="w-[80%] h-[auto] max-w-5xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3"></div>
        </div>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleExport}
            className="hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 flex items-center gap-2"
          >
            <span>EXPORTAR</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </button>
        </div>
        <div className="bg-white  rounded-lg shadow-2xl p-6 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-gray-800">
                CODIGO RESERVA:
              </span>
              <span className="text-xl font-bold text-gray-800">
                {ticketData.reservationCode}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-gray-800">TOTAL:</span>
              <span className="text-xl font-bold text-gray-800">
                {ticketData.total}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-r-2 border-dashed border-gray-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="../public/images/icono1.png"
                  alt="icono"
                  className="w-[200px], h-[150px]"
                />
                <h2 className="text-3xl font-bold text-gray-800">
                  AVIAN TICKET
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    CÓDIGO:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.code}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    ASIENTO:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.seat}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    ORIGEN:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.origin}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    DESTINO:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.destination}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    FECHA IDA:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.departureDate}{" "}
                    {ticketData.flight.departureTime}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    FECHA REGRESO:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.flight.returnDate}{" "}
                    {ticketData.flight.returnTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="../public/images/icono1.png"
                  alt="icono"
                  className="w-[200px], h-[150px]"
                />
                <h2 className="text-3xl font-bold text-gray-800">
                  AVIAN TICKET
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Documento:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.passenger.document}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Nombre:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.passenger.name}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Primer Apellido:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.passenger.firstName}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Segundo Apellido:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.passenger.lastName}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Infante:
                  </span>
                  <span className="text-lg text-gray-800">
                    {ticketData.passenger.isChild}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
