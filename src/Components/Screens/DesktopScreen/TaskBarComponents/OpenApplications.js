import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../ContextProvider/Context';

function OpenApplications(props) {
  const { modals, toggleApplication } = useContext(Context);
  return (
    <StyledOpenApplications>
      {modals.map((modal, idx) => (
        <StyledOpenApplication
          onClick={() => toggleApplication(modal)}
          key={idx}
        >
          {modal}
        </StyledOpenApplication>
      ))}
    </StyledOpenApplications>
  );
}

export default OpenApplications;

const StyledOpenApplications = styled.div`
  margin-left: 4vw;
  width: 80vw;
  display: flex;
`;

const StyledOpenApplication = styled.p`
  border: outset;
  height: 100%;
  width: 8vw;
  margin-right: 0.5vw;
  padding: 0.5vh 0;
  text-align: center;
  cursor: pointer;
`;
