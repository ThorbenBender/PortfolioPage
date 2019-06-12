import React from "react";
import DesktopScreenTop from "./DesktopScreenTop";
import TaskBar from "./TaskBar";
import styled from "styled-components";

function DesktopScreen() {
  return (
    <StyledDesktopScreen>
      <DesktopScreenTop />
      <TaskBar />
    </StyledDesktopScreen>
  );
}

export default DesktopScreen;

const StyledDesktopScreen = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;
