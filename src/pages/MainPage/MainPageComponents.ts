import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 250px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);

`;