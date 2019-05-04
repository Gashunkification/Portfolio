import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TitleSection from '../components/TitleSection/TitleSection';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body { 
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
  }
`;

const AppContainer = styled.div`
  background: #353535;
`;

export default () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <TitleSection />
    </AppContainer>
  </>
);
