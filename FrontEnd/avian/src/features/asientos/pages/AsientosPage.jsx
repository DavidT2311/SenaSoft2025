import React, { useEffect, useState } from "react";
import { reservationsStore } from "../../reservations/context/reservationsStore";
import { seatsStore } from "../context/seatsStore";
import { useNavigate } from "react-router";

export default function AsientosPage() {
  const getSeats = seatsStore((state) => state.getSeats);
  const seats_list = seatsStore((state) => state.seats_list);

  const [seat, setSeat] = useState(null);

  const navigate = useNavigate();

  const generateSeats = () => {
    const seatLayout = [];
    for (let i = 0; i < 90; i++) {
      seatLayout.push(Math.random() > 0.55);
    }
    return seatLayout;
  };

  useEffect(() => {
    getSeats();
  }, []);

  const [seats] = useState(generateSeats());
  const [selectedSeat, setSelectedSeat] = useState(null);

  const toggleSeat = (code) => {
    setSeat(code);
  };

  const handleReserve = () => {
    if (selectedSeat) {
      alert(`Has seleccionado el asiento: ${selectedSeat}`);
      console.log("Asiento seleccionado:", selectedSeat);
    } else {
      alert("Por favor selecciona un asiento.");
    }
  };

  const getSeatColor = (disponible) => {
    // if (seats_list.length > 0) {
    //   for (const element of seats_list) {
    //     if (element.codigo == 3)
    //       return "bg-blue-500 text-white border-blue-600";
    //   }
    // }

    return disponible
      ? "bg-green-400 border-green-500 text-white"
      : "bg-red-400 border-red-500 text-white";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="title-flight-payments flex justify-center py-4 bg-teal-600">
            <h2 className="text-white text-xl font-bold">
              ASIENTOS DISPONIBLES
            </h2>
          </div>

          <div className="bg-gray-100 p-8 flex flex-col items-center">
            {/* Grilla de asientos */}
            <div className="grid grid-cols-10 gap-3 max-w-4xl mx-auto mb-8">
              {seats_list.map(({ codigo, disponible, asiento }, index) => (
                <div
                  key={index}
                  onClick={() => toggleSeat(codigo)}
                  className={`
                    w-12 h-12 flex items-center justify-center font-bold text-sm
                    border-2 rounded-md cursor-pointer transition-all duration-200 
                    ${getSeatColor(disponible)}
                    ${
                      disponible
                        ? "hover:scale-105"
                        : "opacity-50 cursor-not-allowed"
                    }
                  `}
                >
                  {asiento}
                </div>
              ))}
            </div>

            {/* Leyenda */}
            <div className="flex justify-center gap-6 mt-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-400 border-2 border-green-500 rounded-sm"></div>
                <span className="text-gray-700 font-semibold">Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-400 border-2 border-red-500 rounded-sm"></div>
                <span className="text-gray-700 font-semibold">Ocupado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 border-2 border-blue-600 rounded-sm"></div>
                <span className="text-gray-700 font-semibold">
                  Seleccionado
                </span>
              </div>
            </div>

            {/* Mostrar asiento seleccionado */}
            {selectedSeat && (
              <div className="text-center mb-4">
                <p className="text-gray-800 font-bold text-lg">
                  Asiento seleccionado:{" "}
                  <span className="text-blue-600">{selectedSeat}</span>
                </p>
              </div>
            )}

            {/* Botón Reservar */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleReserve}
                className="bg-blue-600 hover:bg-blue-700 flex justify-center text-white font-bold px-12 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
