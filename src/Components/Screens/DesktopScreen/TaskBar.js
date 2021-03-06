import React from 'react';
import styled from 'styled-components';
import WindowsButton from './TaskBarComponents/WindowsButton';
import ContactMe from './TaskBarComponents/ContactMe';
import TimeDisplay from './TaskBarComponents/TimeDisplay';
import OpenApplications from './TaskBarComponents/OpenApplications';
import ContactEmail from './TaskBarComponents/ContactEmail';

function TaskBar(props) {
  return (
    <StyledTaskBar>
      <WindowsButton />
      <ContactMe showModal={props.showModal} />
      <OpenApplications />
      <ContactEmail />
      <TimeDisplay />
    </StyledTaskBar>
  );
}

export default TaskBar;

const StyledTaskBar = styled.div`
  display: flex;
  align-items: center;
  background: #c0c0c0;
  height: 4%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
