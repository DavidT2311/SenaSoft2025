import React from "react";
import "./vuelosPage.css";
import SelectInputComponent from "../../../shared/components/SelectInput";
import SelectDestination from "../../../shared/components/SelectDestination";
import ReturnDate from "../../../shared/components/ReturnDate";
import GoDate from "../../../shared/components/GoDate";
import CarouselComponent from "../../../shared/components/CarouselComponent";

const VuelosPage = () => {
  return (
    <>
      <section className="carousel">
        <CarouselComponent />
      </section>

      <section className="flight-offer">
        <div className="title-flight">
          <h2>OFERTAS DE VUELO AVIAN</h2>
        </div>
        <div className="content-select">
          <select name="" id="" className="select-options">
            <option value="">Ida y vuelta</option>
            <option value="">Solo ida</option>
          </select>
          <div className="content-input">
            <input
              type="number"
              className="option-number"
              placeholder="Pasajeros"
            />
          </div>
        </div>
        <div className="content-filter">
          <h2>Origen:</h2>
          <SelectInputComponent />
          <h2>Destino:</h2>
          <SelectDestination />
          <h2>Fecha ida:</h2>
          <ReturnDate />
          <h2>Fecha regreso:</h2>
          <GoDate />
        </div>
      </section>
      <section className="flight-available">
        <div className="title-flight">
          <h2>VUELOS DISPONIBLES</h2>
        </div>
        <div className="content-available">
          <h2>Origen</h2>
          <h2>Destino</h2>
          <h2>Fecha</h2>
          <h2>Hora</h2>
          <h2>Capacidad</h2>
          <h2>Precio</h2>
        </div>
        <div className="select-flight">
          <div className="content-flight">
            <div className="origin-flight">
              <p>Manizales</p>
            </div>
            <div className="origin-flight">
              <p>Medellin</p>
            </div>
            <div className="origin-flight">
              <p>21/10/2025</p>
            </div>
            <div className="origin-flight">
              <p>1:00 P.M</p>
            </div>
            <div className="origin-flight">
              <p>20</p>
            </div>
            <div className="origin-flight">
              <p>750,0000 COP</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VuelosPage;
