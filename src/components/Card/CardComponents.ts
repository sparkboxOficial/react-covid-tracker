import styled from 'styled-components'
import CountUp from 'react-countup';

interface CardColor {
  type: 'INFECTED' | 'RECOVERED' | 'DEATH';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div<CardColor>`
  width: 250px;
  height: 210px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  
  border-bottom: ${(props) => {
      switch (props.type) {
        case 'INFECTED':
          return '10px solid rgba(0, 0, 255, 0.5)';
        case 'RECOVERED':
          return '10px solid rgba(0, 255, 0, 0.5)';
        default:
          return '10px solid rgba(255, 0, 0, 0.5)';
      }
  }};

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 6px 11px 17px -7px rgba(168,168,168,0.73);
`

export const CardRegularText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: gray;
`

export const CardNumber = styled(CountUp)`
  font-size: 22px;
  font-weight: 600;
  color: black;
`

export const CardInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;