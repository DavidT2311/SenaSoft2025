import React from "react";
import "./vuelosPage.css";

const VuelosPage = () => {
  return (
    <>
      <section className="carousel"></section>

      <section className="flight-offer">
        <div className="content-select">
          <select name="" id="" className="select-options">
            <option value="">Ida y vuelta</option>
            <option value="">Solo ida</option>
          </select>
          <div className="content-input">
            <input type="number" className="option-number" placeholder="Pasajeros"/>
          </div>
        </div>
      </section>
      <section className="flight-available"></section>
    </>
  );
};

export default VuelosPage;
