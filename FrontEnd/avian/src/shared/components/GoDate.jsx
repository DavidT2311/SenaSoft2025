import React, { useState } from "react";
import "./search.css";

function GoDate({ value, action }) {
  return (
    <div className="date-wrapper">
      <input
        type="date"
        value={value}
        onChange={action}
        className="date-input"
        placeholder="Selecciona fecha ida"
      />
    </div>
  );
}

export default GoDate;
