import React, { useState } from "react";
import "./search.css";

function ReturnDate({ value, action }) {
  return (
    <div className="date-wrapper">
      <input
        type="date"
        defaultValue={value}
        onChange={(e) => action(e)}
        className="date-input"
        placeholder="Selecciona fecha ida"
      />
    </div>
  );
}

export default ReturnDate;
