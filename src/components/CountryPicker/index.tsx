import React, { useEffect, useState } from 'react';
import ICountries from '../../dtos/ICountriesApi';

import { Select } from './CountryPickerComponents';

import api from '../../api';

interface ICountryPicker {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryPicker:React.FC<ICountryPicker> = ({ handleChange }) => {
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
    <Select onChange={(e) => handleChange(e)}>
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