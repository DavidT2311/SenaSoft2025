import React, { useState } from "react";
import ButtonPayment from "../../../shared/components/ButtonPayment";
import "./payment.css"; 


export default function PagosPage() {
  const [formData, setFormData] = useState({
    documentType: "C.C",
    email: "",
    document: "",
    phone: "",
    fullName: "",
    paymentType: "Tarjeta Débito",
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Tipo de documento:", formData.documentType);
    console.log("Correo:", formData.email);
    console.log("Documento:", formData.document);
    console.log("Teléfono:", formData.phone);
    console.log("Nombre completo:", formData.fullName);
    console.log("Tipo de pago:", formData.paymentType);
    console.log("Monto:", formData.amount);
    console.log("Número de tarjeta:", formData.cardNumber);
    console.log("Caducidad:", formData.expiryDate);
    console.log("CVV:", formData.cvv);
    console.log("Acepta términos:", formData.acceptTerms);
  };

  return (
    <div className="min-h-screen  to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="title-flight-payments flex justify-center">
            <h2>FORMULARIO DE PAGO</h2>
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
                  Nombre Completo:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Juan Andres Alvarez Gutierrez"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Tipo de pago:
                </label>
                <select
                  name="paymentType"
                  value={formData.paymentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="Tarjeta Débito">Tarjeta Débito</option>
                  <option value="Tarjeta Crédito">Tarjeta Crédito</option>
                  <option value="PSE">PSE</option>
                  <option value="Efectivo">Efectivo</option>
                </select>
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Monto:
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="750,000 COP"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Número de la tarjeta:
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="4000 1234 5678 9010"
                  maxLength="19"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  Caducidad:
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="27/02"
                  maxLength="5"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-bold mb-2 text-lg">
                  CVV:
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="1234"
                  maxLength="4"
                  className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-8 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition ${
                      formData.acceptTerms
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {formData.acceptTerms && (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-teal-700 font-bold text-lg">
                  Aceptar Términos y condiciones
                </span>
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-center">
              <ButtonPayment text={"Reservar"} onClick={handleSubmit} />
            </div>
            <div className="mt-6 text-center">
              <button 
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-700 rounded-full hover:bg-gray-100 transition"
              >
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