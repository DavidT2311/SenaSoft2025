import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./ticket.css";

export default function TicketPage() {
  const ticketRef = useRef(null);

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

  const handleExport = async () => {
    try {
      const element = ticketRef.current;

      // clonar el elemento para no afectar el DOM original
      const clone = element.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      document.body.appendChild(clone);

      // forzar estilos css
      const allElements = clone.querySelectorAll("*");
      allElements.forEach((el) => {
        const computed = window.getComputedStyle(el);

        // background a transparente
        if (
          computed.backgroundColor &&
          computed.backgroundColor.includes("oklch")
        ) {
          el.style.backgroundColor = convertToRgb(el, "backgroundColor");
        }

        // color a rgb
        if (computed.color && computed.color.includes("oklch")) {
          el.style.color = convertToRgb(el, "color");
        }

        // borderColor a rgb
        if (computed.borderColor && computed.borderColor.includes("oklch")) {
          el.style.borderColor = convertToRgb(el, "borderColor");
        }
      });

      function convertToRgb(el, prop) {
        // Crear temporal
        const temp = document.createElement("div");
        temp.style.color = window.getComputedStyle(el)[prop];
        document.body.appendChild(temp);
        const rgb = window.getComputedStyle(temp).color;
        document.body.removeChild(temp);

        // Si sigue con oklch, reemplaza por un color
        if (rgb.includes("oklch")) {
          return "rgba(0,0,0,0)";
        }
        return rgb;
      }

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#fff",
        allowTaint: true,
      });

      document.body.removeChild(clone);

      const imgData = canvas.toDataURL("image/png");
      const pxToMm = (px) => px * 0.264583;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pxToMm(canvas.width), pxToMm(canvas.height)],
      });

      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`ticket-${ticketData.reservationCode}.pdf`);

      console.log("PDF exportado exitosamente");
    } catch (error) {
      console.error("Error al exportar PDF:", error);
      alert("Hubo un error al exportar el PDF: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="w-[80%] h-[auto] max-w-5xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3"></div>
        </div>

        <div className="flex justify-end mb-4">
          <button onClick={handleExport} className="custom-button">
            <span>EXPORTAR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
            </svg>
          </button>
        </div>

        {/* Contenedor del ticket que se exportará */}
        <div ref={ticketRef}>
          <div className="bg-white rounded-lg shadow-2xl p-6 mb-4">
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
                    className="w-[200px] h-[150px]"
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
                    className="w-[200px] h-[150px]"
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
    </div>
  );
}
