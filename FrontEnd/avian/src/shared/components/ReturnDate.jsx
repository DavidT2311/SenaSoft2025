import React, { useState } from 'react';
import "./search.css";

function ReturnDate() {
  const [fechaIda, setFechaIda] = useState('');

  const handleChange = (e) => {
    setFechaIda(e.target.value);
  };

  return (
    <div className="date-wrapper">
      <input
        type="date"
        value={fechaIda}
        onChange={handleChange}
        className="date-input"
        placeholder="Selecciona fecha ida"
      />
    </div>
  );
}

export default ReturnDate;
