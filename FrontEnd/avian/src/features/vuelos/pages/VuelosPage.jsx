import React, { useEffect, useState } from "react";
import "./vuelosPage.css";
import SelectInputComponent from "../../../shared/components/SelectInput";
import SelectDestination from "../../../shared/components/SelectDestination";
import ReturnDate from "../../../shared/components/ReturnDate";
import GoDate from "../../../shared/components/GoDate";
import CarouselComponent from "../../../shared/components/CarouselComponent";
import { flightsStore } from "../context/flightsStore";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router";
import Button from "../../../shared/components/Button";

const VuelosPage = () => {
  const getFlights = flightsStore((state) => state.getFlights);
  const setFlightCode = flightsStore((state) => state.setFlightCode);
  const flightsList = flightsStore((state) => state.flightsList);

  // Estados controlados
  const [flightType, setFlightType] = useState("");
  const [passengers, setPassengers] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [goDate, setGoDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    // getFlights();
    console.log("Pasajeros:", passengers);
    console.log("Tipo de vuelo:", flightType);
    console.log("Origen:", origin);
    console.log("Destino:", destination);
    console.log("Fecha ida:", goDate);
    console.log("Fecha regreso:", returnDate);
  };

  const handleSelectFlight = (codigo) => {
    setFlightCode(codigo);
    navigate("/reserva");
  };

  return (
    <>
      {/* Carrusel */}
      <section className="carousel">
        <CarouselComponent />
      </section>

      {/* Seccion con los input para los filtros */}
      <section className="flight-offer">
        <div className="title-flight">
          <h2>OFERTAS DE VUELO AVIAN</h2>
        </div>

        <div className="content-select">
          {/* Select tipo de vuelo */}
          <select
            className="select-options"
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          >
            <option value="">Seleccione tipo</option>
            <option value="Solo ida">Solo ida</option>
            <option value="Ida y regreso">Ida y regreso</option>
          </select>

          {/* Input pasajeros */}
          <div className="content-input">
            <input
              type="number"
              className="option-number"
              placeholder="Pasajeros"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
        </div>

        {/* Filtros de vuelo */}
        <div className="content-filter">
          <h2>Origen:</h2>
          <SelectInputComponent
            value={origin}
            action={(e) => {
              const val = e?.target ? e.target.value : e;
              setOrigin(val);
            }}
            options={[
              { value: "Bogotá", label: "Bogotá" },
              { value: "Manizales", label: "Manizales" },
              { value: "Medellin", label: "Medellin" },
            ]}
          />

          <h2>Destino:</h2>
          <SelectDestination
            value={destination}
            action={(e) => {
              const val = e?.target ? e.target.value : e;
              setDestination(val);
            }}
            options={[
              { value: "Bogotá", label: "Bogotá" },
              { value: "Manizales", label: "Manizales" },
              { value: "Medellin", label: "Medellin" },
            ]}
          />

          <h2>Fecha ida:</h2>
          <GoDate
            value={goDate}
            action={(e) => {
              const val = e?.target ? e.target.value : e;
              setGoDate(val);
            }}
          />

          <h2>Fecha regreso:</h2>
          <ReturnDate
            value={returnDate}
            action={(e) => {
              const val = e?.target ? e.target.value : e;
              setReturnDate(val);
            }}
          />

          <div onClick={handleSearch}>
            <Button text={"Buscar"} />
          </div>
        </div>
      </section>

      {/* Seccion para los vuelos disponibles */}
      <section className="flight-available">
        <div className="title-flight">
          <h2>VUELOS DISPONIBLES</h2>
        </div>

        {/* Seccion para los filtros de busqueda */}
        <div className="content-available">
          <h2>Origen</h2>
          <h2>Destino</h2>
          <h2>Fecha</h2>
          <h2>Hora</h2>
          <h2>Capacidad</h2>
          <h2>Precio</h2>
        </div>

        {/* Seccion para las tarjetas con los vuelos */}
        <div className="select-flight">
          {flightsList.length > 0 &&
            flightsList.map(
              (
                {
                  codigo,
                  origen,
                  destino,
                  fecha_ida,
                  hora_ida,
                  capacidad,
                  precio,
                },
                index
              ) => (
                <CardComponent
                  key={index}
                  origen={origen}
                  destino={destino}
                  fecha={fecha_ida}
                  hora={hora_ida}
                  capacidad={capacidad}
                  precio={precio}
                  action={() => handleSelectFlight(codigo)}
                />
              )
            )}
        </div>
      </section>
    </>
  );
};

export default VuelosPage;
