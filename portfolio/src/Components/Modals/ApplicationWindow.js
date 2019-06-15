import React from "react";
import ApplicationWindowBar from "../Reusable-Components/ApplicationWindow/ApplicationWindowBar";
import ApplicationWindowScreen from "../Reusable-Components/ApplicationWindow/ApplicationWindowScreen";
import styled from "styled-components";

function ApplicationWindow(props) {
  return (
    <StyledApplicationWindow>
      <ApplicationWindowBar
        closeModal={props.closeModal}
        applicationName={props.applicationName}
        icon={props.icon}
        iconAlt={props.iconAlt}
      />
      <ApplicationWindowScreen screen={props.applicationName} />
    </StyledApplicationWindow>
  );
}

export default ApplicationWindow;

const StyledApplicationWindow = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 20vh;
  left: 30vw;
  z-index: 2;
  height: 50vh;
  width: 40vw;
  background: #bfc7c9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: outset;
`;
