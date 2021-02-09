import React from 'react';

import { Select } from './CountryPicketComponents';
const CountryPicker:React.FC = () => {
  return (
    <Select onChange={(e) => console.log(e.target.value)}>
      <option value="Global">Global</option>
    </Select>
  )
}

export default CountryPicker;