import React from 'react';
import ProjectsScreen from '../../Screens/ProjectsScreen/ProjectScreen';
import styled from 'styled-components';
import QuestionScreen from '../../Screens/QuestionScreen/QuestionScreen';
import AboutMeScreen from '../../Screens/AboutMe/AboutMeScreen';

function ApplicationWindowScreen(props) {
  return (
    <StyledApplicationWindowScreen>
      {props.screen === 'Pinely' && <ProjectsScreen openFolder="Pinely" />}
      {props.screen === 'Guidr' && <ProjectsScreen openFolder="Guidr" />}
      {props.screen === 'Flocks' && <ProjectsScreen openFolder="Flocks" />}
      {props.screen === 'Questions Flocks' && (
        <QuestionScreen
          screen={props.screen}
          QuestionScreen="Flocks"
          closeModal={props.closeModal}
        />
      )}
      {props.screen === 'Questions Pinely' && (
        <QuestionScreen
          screen={props.screen}
          QuestionScreen="Pinely"
          closeModal={props.closeModal}
        />
      )}
      {props.screen === 'Questions Guidr' && (
        <QuestionScreen
          screen={props.screen}
          QuestionScreen="Guidr"
          closeModal={props.closeModal}
        />
      )}
      {props.screen === 'About Me' && <AboutMeScreen screen={props.screen} />}
    </StyledApplicationWindowScreen>
  );
}

export default ApplicationWindowScreen;

const StyledApplicationWindowScreen = styled.div`
  height: 94%;
`;
