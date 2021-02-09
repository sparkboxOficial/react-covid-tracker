import React from 'react';

import MainPage from './pages/MainPage';
import GlobalStyle from './styles/globalStyles';

const App:React.FC  = () => {
  return (
    <> 
      <MainPage />
      <GlobalStyle />
    </>
  );
}

export default App;
