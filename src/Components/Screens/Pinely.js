import React from 'react';
import ApplicationWindowBar from '../Reusable-Components/ApplicationWindow/ApplicationWindowBar';
import ProjectFolder from './ProjectsScreen/ProjectFolder';
import styled from 'styled-components';

const Pinely = props => {
  //   const style = props.hiddenApplication.includes(
  //     props.applicationName
  //   )
  //     ? { display: 'none' }
  //     : { marginTop: `${props.index * 1.75}vw`, zIndex: props.index };
  return (
    <StyledApplicationWindow key={props.applicationName}>
      <ApplicationWindowBar
        closeModal={props.closeModal}
        applicationName="Pinely"
        icon={props.icon}
        iconAlt={props.iconAlt}
        toggleApplication={props.toggleApplication}
      />
      <StyledApplicationWindowScreen>
        <ProjectFolder
          githubLink="https://github.com/labseu1-db"
          websiteLink="https://pinely.app/"
          closeFolder={props.closeFolder}
          showModal={props.showModal}
          folder={props.openFolder}
        />
      </StyledApplicationWindowScreen>
    </StyledApplicationWindow>
  );
};

export default Pinely;

const StyledApplicationWindow = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 20vh;
  left: 30vw;
  height: 40%;
  width: 35%;
  background: #bfc7c9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: outset;
`;

const StyledApplicationWindowScreen = styled.div`
  height: 94%;
`;
