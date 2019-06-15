import React from "react";
import ProjectsScreen from "../../Screens/ProjectsScreen/ProjectScreen";
import styled from "styled-components";

function ApplicationWindowScreen(props) {
  return (
    <StyledApplicationWindowScreen>{props.screen === "Projects" && <ProjectsScreen />}</StyledApplicationWindowScreen>
  );
}

export default ApplicationWindowScreen;

const StyledApplicationWindowScreen = styled.div`
  height: 80%;
`;
