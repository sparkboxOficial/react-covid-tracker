import React from 'react';

import { Cards, Chart, CountryPicker } from '../../components'

import { Container } from './MainPageComponents'

const MainPage: React.FC = () => {
  return (
    <Container>
      <Cards />
      <CountryPicker />
      <Chart />
    </Container>
  );
}

export default MainPage;
