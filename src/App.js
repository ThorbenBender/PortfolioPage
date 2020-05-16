import React from 'react';
import DesktopScreen from './Components/Screens/DesktopScreen/DesktopScreen';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import ContextProvider from './Components/ContextProvider/ContextProvider';

function initializeAnalytics() {
  ReactGA.initialize('UA-153103752-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeAnalytics();
  return (
    <ContextProvider>
      <StlyedApp>
        <DesktopScreen />
      </StlyedApp>
    </ContextProvider>
  );
}

export default App;

const StlyedApp = styled.div`
  padding: 0;
`;
