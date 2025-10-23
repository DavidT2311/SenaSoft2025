import React, { useState } from "react";
import Select from "react-select";
import "./search.css";

function SelectWithSearch({ options, value, action }) {
  return (
    <div className="search-origin">
      <Select
        options={options}
        defaultValue={value}
        onChange={action}
        placeholder="Selecciona..."
        isClearable
      />
    </div>
  );
}

export default SelectWithSearch;
