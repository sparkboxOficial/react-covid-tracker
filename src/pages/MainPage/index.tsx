import React, { useEffect, useState } from 'react';

import { Card, Chart, CountryPicker } from '../../components'
import { Container, CardsWrapper, Wrapper } from './MainPageComponents'

import FadeLoader from "react-spinners/BounceLoader";
import Logo from '../../assets/covid_logo.png';
import ICovidApi from '../../dtos/ICovidApi';
import api from '../../api/index';

const MainPage: React.FC = () => {
  const [ covidData, setCovidData ] = useState<ICovidApi>({} as ICovidApi)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<ICovidApi>('')
      .then(response => {
        console.log(response);
        setCovidData(response.data);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  function handleChangeCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();

    const country = event.target.value;

    if (country === "Global") {
      api.get<ICovidApi>('')
      .then(response => {
        setCovidData(response.data);
      }).catch(err => {
        console.log(err);
      });
    } else {
      api.get<ICovidApi>(`countries/${country}`)
        .then(response => {
          console.log(response);
          setCovidData(response.data);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <Container>
      {
        loading ? 
        <FadeLoader css="position:fixed; top: 50%; left: 50%" color="#00142c" loading={loading}/>
        :
        <Wrapper>
          <img src={Logo} alt="logo"/>
          <CardsWrapper>
            <Card covidNumbers={covidData.confirmed} updatedDate={covidData.lastUpdate} type="INFECTED"/>
            <Card covidNumbers={covidData.recovered} updatedDate={covidData.lastUpdate} type="RECOVERED"/>
            <Card covidNumbers={covidData.deaths} updatedDate={covidData.lastUpdate} type="DEATH"/>
          </CardsWrapper>
          <CountryPicker handleChange={handleChangeCountry}/>
          <Chart covidData={covidData}/>
        </Wrapper>
      }
    </Container>
  );
}

export default MainPage;
