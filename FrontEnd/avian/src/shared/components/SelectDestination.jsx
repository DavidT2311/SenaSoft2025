import React, { useState } from 'react';
import Select from 'react-select';
import "./search.css";


const options = [
  { value: 'Bogotá', label: 'Bogotá' },
  { value: 'Manizales', label: 'Manizales' },
  { value: 'Medellin', label: 'Medellin' }
];

function SelectWithSearch() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <div className='search-origin'>
        
      <Select
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder="Selecciona o busca..."
        isClearable
      />
    </div>
  )
}

export default SelectWithSearch;