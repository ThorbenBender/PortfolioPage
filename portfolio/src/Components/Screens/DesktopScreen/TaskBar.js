import React from "react";
import styled from "styled-components";
import WindowsButton from "./TaskBarComponents/WindowsButton";
import InterviewPlanner from "./TaskBarComponents/InterviewPlanner";
import ContactMe from "./TaskBarComponents/ContactMe";
import TimeDisplay from "./TaskBarComponents/TimeDisplay";

function TaskBar() {
  return (
    <StyledTaskBar>
      <WindowsButton />
      <InterviewPlanner />
      <ContactMe />
      <TimeDisplay />
    </StyledTaskBar>
  );
}

export default TaskBar;

const StyledTaskBar = styled.div`
  display: flex;
  height: 1%;
`;
