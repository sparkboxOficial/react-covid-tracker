import React, { useEffect, useState } from 'react';

import { Card, Chart, CountryPicker } from '../../components'
import { Container, CardsWrapper, Wrapper } from './MainPageComponents'

import Logo from '../../assets/covid_logo.png';
import ICovidApi from '../../dtos/ICovidApi';
import api from '../../api/index';

const MainPage: React.FC = () => {
  const [ covidData, setCovidData ] = useState<ICovidApi>({} as ICovidApi)

  // useEffect(() => {
  //   api.get<ICovidApi>('')
  //     .then(response => {
  //       setCovidData(response.data);
  //     }).catch(err => {
  //       console.log(err);
  //     });e
  // }, []);

  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="logo"/>
        <CardsWrapper>
          <Card covidNumbers={covidData.confirmed} updatedDate={covidData.lastUpdate} type="INFECTED"/>
          <Card covidNumbers={covidData.recovered} updatedDate={covidData.lastUpdate} type="RECOVERED"/>
          <Card covidNumbers={covidData.deaths} updatedDate={covidData.lastUpdate} type="DEATH"/>
        </CardsWrapper>
        <CountryPicker />
        <Chart />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
