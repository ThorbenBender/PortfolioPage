import React, { useContext } from 'react';
import ApplicationWindowBar from '../Reusable-Components/ApplicationWindow/ApplicationWindowBar';
import ProjectFolder from './ProjectsScreen/ProjectFolder';
import styled from 'styled-components';
import Context from '../ContextProvider/Context';

const Flocks = props => {
  const { hiddenApplication, highlightApplication } = useContext(Context);
  const style = hiddenApplication.includes('Flocks')
    ? { display: 'none' }
    : { marginTop: `${props.index * 1.75}vw`, zIndex: props.index };
  return (
    <StyledApplicationWindow
      key={props.applicationName}
      style={style}
      onClick={e => {
        if (e.target === e.currentTarget) {
          highlightApplication('Flocks');
        }
      }}
    >
      <ApplicationWindowBar
        applicationName="Flocks"
        icon={props.icon}
        iconAlt={props.iconAlt}
      />
      <StyledApplicationWindowScreen>
        <ProjectFolder githubLink="https://github.com/flocks1" />
      </StyledApplicationWindowScreen>
    </StyledApplicationWindow>
  );
};

export default Flocks;

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
