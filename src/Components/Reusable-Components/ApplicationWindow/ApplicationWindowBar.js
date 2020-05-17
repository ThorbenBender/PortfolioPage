import React, { useContext } from 'react';
import closeIcon from '../../Icons/close-button.png';
import minimizeIcon from '../../Icons/minimize_window.png';
import styled from 'styled-components';
import Context from '../../ContextProvider/Context';

function ApplicationWindowBar(props) {
  const { closeModal, toggleApplication } = useContext(Context);
  return (
    <StyledApplicationWindowBar>
      <StyledApplicationNameIcon src={props.icon} alt={props.iconAlt} />
      <StyledApplicationName>{props.applicationName}</StyledApplicationName>
      <StyledApplicationWindowBarIcon
        src={minimizeIcon}
        alt="minimize window icon"
        onClick={() => toggleApplication(props.applicationName)}
      />
      <StyledApplicationWindowBarIcon
        src={closeIcon}
        alt="close window icon"
        onClick={() => closeModal(props.applicationName)}
      />
    </StyledApplicationWindowBar>
  );
}

export default ApplicationWindowBar;

const StyledApplicationWindowBar = styled.div`
  background: #0d0c8e; /* Old browsers */
  background: -moz-linear-gradient(top, #0d0c8e 0%, #0100aa 100%);
  background: -webkit-linear-gradient(top, #0d0c8e 0%, #0100aa 100%);
  background: linear-gradient(to bottom, #0d0c8e 0%, #0100aa 100%);
  height: 2.5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.1vw;
  width: 100%;
`;

const StyledApplicationWindowBarIcon = styled.img`
  width: 0.75vw;
  background: #bec8c9;
  border-style: outset;
  margin-left: 0.25vw;
  margin-right: 0.1vw;
  cursor: pointer;
`;

const StyledApplicationName = styled.p`
  color: white;
  margin-right: auto;
  font-weight: 600;
`;

const StyledApplicationNameIcon = styled.img`
  margin-right: 0.3vw;
  margin-left: 0.2vw;
`;
