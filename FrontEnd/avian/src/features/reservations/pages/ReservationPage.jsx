import React, { useState } from "react";
import Button from "../../../shared/components/Button";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    documentType: "C.C",
    email: "",
    document: "",
    phone: "",
    firstName: "",
    birthDate: "",
    lastName1: "",
    gender: "Masculino",
    lastName2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Reservar:", formData);
  };

  const handleViewSeats = () => {
    console.log("Ver Asientos");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8"></div>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="title-flight-payments flex justify-center">
            <h2>FORMULARIO DE RESERVA</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Tipo de documento:
                </label>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="C.C">C.C</option>
                  <option value="T.I">T.I</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="C.E">C.E</option>
                </select>
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Correo:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@gmail.com"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Documento:
                </label>
                <input
                  type="text"
                  name="document"
                  value={formData.document}
                  onChange={handleChange}
                  placeholder="123456789"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Celular:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="3124567890"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Nombres:
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Juan Andres"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Fecha Nacimiento:
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  placeholder="06/12/2001"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Primer Apellido:
                </label>
                <input
                  type="text"
                  name="lastName1"
                  value={formData.lastName1}
                  onChange={handleChange}
                  placeholder="Alvarez"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Genero:
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className=" d-flex">
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Segundo Apellido:
                </label>
                <input
                  type="text"
                  name="lastName1"
                  value={formData.lastName1}
                  onChange={handleChange}
                  placeholder="Alvarez"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-center">
                <Button text={"Ver Asientos"} />
                <Button text={"Reservar"} />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-700 rounded-full hover:bg-gray-100 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
