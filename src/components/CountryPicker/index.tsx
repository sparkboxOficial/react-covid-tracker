import React, { useEffect, useState } from 'react';
import ICountries from '../../dtos/ICountriesApi';

import { Select } from './CountryPickerComponents';

import api from '../../api';

const CountryPicker:React.FC = () => {
  const [countriesApi, setCountriesApi] = useState<ICountries>({ countries: [] });

  useEffect(() => {
    api.get<ICountries>('countries').then((response) => {
      setCountriesApi(response.data);
    })
    .catch(err => {
      console.log( err);
    })
  }, []);
  
  return (
    <Select onChange={(e) => console.log(e.target.value)}>
      <option value="Global">Global</option>
      {
        countriesApi.countries.map(country => {
          return (
            <option value={country.name} id={country.iso3}>{country.name}</option>
          );
        })
      }
    </Select>
  )
}

export default CountryPicker;