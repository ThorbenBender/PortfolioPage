import React from "react";
import DesktopScreen from "./Components/Screens/DesktopScreen/DesktopScreen";
import styled from "styled-components";
import ReactGA from 'react-ga';

function initializeAnalytics() {
  ReactGA.initialize('UA-153103752-1')
  ReactGA.pageview('/HomePage');
}

function App() {
  initializeAnalytics()
  return (
    <StlyedApp>
      <DesktopScreen />
    </StlyedApp>
  );
}

export default App;

const StlyedApp = styled.div`
  padding: 0;
`;
