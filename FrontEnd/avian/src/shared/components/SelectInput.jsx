import React, { useState } from "react";
import Select from "react-select";
import "./search.css";

function SelectWithSearch({ options, value, action }) {
  return (
    <div className="search-origin">
      <Select
        options={options}
        defaultValue={value}
        onChange={(e) => action(e)}
        placeholder="Selecciona..."
        isClearable
      />
    </div>
  );
}

export default SelectWithSearch;
