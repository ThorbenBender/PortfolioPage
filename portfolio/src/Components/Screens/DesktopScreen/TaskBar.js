import React from "react";
import styled from "styled-components";
import WindowsButton from "./TaskBarComponents/WindowsButton";
import ContactMe from "./TaskBarComponents/ContactMe";
import TimeDisplay from "./TaskBarComponents/TimeDisplay";

function TaskBar() {
  return (
    <StyledTaskBar>
      <WindowsButton />
      <ContactMe />
      <TimeDisplay />
    </StyledTaskBar>
  );
}

export default TaskBar;

const StyledTaskBar = styled.div`
  display: flex;
  height: 3%;
  background: #c0c0c0;
  border-top: 2px solid white;
`;
