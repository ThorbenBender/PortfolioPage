import React from "react";
import DesktopScreen from "./Components/Screens/DesktopScreen/DesktopScreen";
import styled from "styled-components";

function App() {
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
