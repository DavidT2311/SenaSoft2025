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

  const [flightType, setFlightType] = useState("");
  const [passengers, setPassengers] = useState("");

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [goDate, setGoDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    // getFlights();
    console.log(passengers);
    console.log(flightType);
    console.log(origin);
    console.log(destination);
    console.log(goDate);
    console.log(returnDate);
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
          <select
            className="select-options"
            defaultValue={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          >
            <option value="Solo ida">Solo ida</option>
            <option value="Ida y regreso">Ida y regreso</option>
          </select>
          <div className="content-input">
            <input
              type="number"
              className="option-number"
              placeholder="Pasajeros"
              defaultValue={flightType}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
        </div>

        <div className="content-filter">
          <h2>Origen:</h2>
          <SelectInputComponent
            value={origin}
            action={(e) => setOrigin(e.target.value)}
            options={[
              { value: "Bogotá", label: "Bogotá" },
              { value: "Manizales", label: "Manizales" },
              { value: "Medellin", label: "Medellin" },
            ]}
          />
          <h2>Destino:</h2>
          <SelectDestination
            value={destination}
            action={(e) => setDestination(e.target.value)}
            options={[
              { value: "Bogotá", label: "Bogotá" },
              { value: "Manizales", label: "Manizales" },
              { value: "Medellin", label: "Medellin" },
            ]}
          />
          <h2>Fecha ida:</h2>
          <GoDate value={goDate} action={(e) => setGoDate(e.target.value)} />
          <h2>Fecha regreso:</h2>
          <ReturnDate
            value={returnDate}
            action={(e) => setReturnDate(e.target.value)}
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
