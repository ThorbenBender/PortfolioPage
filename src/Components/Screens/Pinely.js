import React, { useContext } from 'react';
import ApplicationWindowBar from '../Reusable-Components/ApplicationWindow/ApplicationWindowBar';
import ProjectFolder from './ProjectsScreen/ProjectFolder';
import styled from 'styled-components';
import Context from '../ContextProvider/Context';

const Pinely = props => {
  const { hiddenApplication, highlightApplication, addModal } = useContext(
    Context
  );
  const style = hiddenApplication.includes('Pinely')
    ? { display: 'none' }
    : { marginTop: `${props.index * 1.75}vw`, zIndex: props.index };
  return (
    <StyledApplicationWindow
      key={props.applicationName}
      style={style}
      onClick={e => {
        if (e.target === e.currentTarget) {
          highlightApplication('Pinely');
        }
      }}
    >
      <ApplicationWindowBar
        applicationName="Pinely"
        icon={props.icon}
        iconAlt={props.iconAlt}
        toggleApplication={props.toggleApplication}
      />
      <StyledApplicationWindowScreen>
        <ProjectFolder
          githubLink="https://github.com/labseu1-db"
          websiteLink="https://pinely.app/"
          addModal={addModal}
          folder="Pinely"
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
