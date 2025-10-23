import React, { useState } from 'react';

export default function AsientosPage() {
  // Generar 90 asientos (15 filas x 6 asientos): verde = disponible, rojo = ocupado
  const generateSeats = () => {
    const seatLayout = [];
    for (let i = 0; i < 90; i++) {
      seatLayout.push(Math.random() > 0.55); // 45% disponibles, 55% ocupados
    }
    return seatLayout;
  };

  const [seats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatIndex) => {
    const seatId = `seat-${seatIndex}`;
    
    // Si el asiento está ocupado (rojo), no hacer nada
    if (!seats[seatIndex]) {
      return;
    }

    // Alternar selección
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleReserve = () => {
    if (selectedSeats.length > 0) {
      console.log('Asientos reservados:', selectedSeats);
      alert(`Has seleccionado ${selectedSeats.length} asiento(s)`);
    } else {
      alert('Por favor selecciona al menos un asiento');
    }
  };

  const getSeatColor = (seatIndex) => {
    const seatId = `seat-${seatIndex}`;
    const isAvailable = seats[seatIndex];
    const isSelected = selectedSeats.includes(seatId);

    if (isSelected) {
      return 'bg-blue-500 border-blue-600';
    }
    return isAvailable ? 'bg-green-400 border-green-500' : 'bg-red-400 border-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-300 to-gray-200 py-6 px-8">
            <h2 className="text-3xl font-bold text-gray-600 text-center tracking-wide">
              ASIENTOS DISPONIBLES
            </h2>
          </div>

          {/* Seats Grid */}
          <div className="bg-gray-200 p-8">
            <div className="grid grid-cols-6 gap-1.5 max-w-md mx-auto">
              {seats.map((isAvailable, index) => (
                <button
                  key={index}
                  onClick={() => toggleSeat(index)}
                  disabled={!isAvailable}
                  className={`w-10 h-10 rounded ${getSeatColor(index)} border-2 transition-all transform hover:scale-110 disabled:cursor-not-allowed disabled:hover:scale-100`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-8 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-400 border-2 border-green-500 rounded"></div>
                <span className="text-gray-700 font-semibold">Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-400 border-2 border-red-500 rounded"></div>
                <span className="text-gray-700 font-semibold">Ocupado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 border-2 border-blue-600 rounded"></div>
                <span className="text-gray-700 font-semibold">Seleccionado</span>
              </div>
            </div>

            {/* Selected Count */}
            {selectedSeats.length > 0 && (
              <div className="text-center mb-4">
                <p className="text-gray-700 font-bold text-lg">
                  Asientos seleccionados: {selectedSeats.length}
                </p>
              </div>
            )}

            {/* Reserve Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleReserve}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Reservar
              </button>
            </div>

            {/* Back Button */}
            <div className="mt-6 text-center">
              <button
                className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-700 rounded-full hover:bg-gray-300 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <h3 className="text-3xl font-bold text-white tracking-wider">AVIAN.NET</h3>
        </div>
      </div>
    </div>
  );
}