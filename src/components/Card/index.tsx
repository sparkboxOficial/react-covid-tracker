import React from 'react';
import { CovidNumbers } from '../../dtos/ICovidApi';
import { CardBody, CardInfo, CardNumber, CardRegularText, Container } from './CardComponents';


interface CardProps {
  covidNumbers: CovidNumbers;
  updatedDate: string;
  type: 'INFECTED' | 'RECOVERED' | 'DEATH';
}

const Card:React.FC<CardProps> = ({ covidNumbers, updatedDate, type }) => {
  
  const typeOfCard = 
    type === 'RECOVERED'? 
      "Recuperados" : 
      type === "INFECTED" ? "Infectados": "Mortos";

  const message = type === 'RECOVERED'? 
    "Número de pessoas recuperadas do COVID-19" : 
    type === "INFECTED" ? "Número de infectados pelo COVID-19": "Número de mortos pelo COVID-19";

  return (

    <Container>
      <CardBody type={type}>
        <CardRegularText>{typeOfCard}</CardRegularText>
        <CardNumber start={0} end={100} duration={1.5} separator=","></CardNumber>
        <CardRegularText>DATA DA ULTIMA ATUALIZAÇÃO</CardRegularText>
        <CardInfo>{message}</CardInfo>
      </CardBody>
    </Container>
  )
}

export default Card;