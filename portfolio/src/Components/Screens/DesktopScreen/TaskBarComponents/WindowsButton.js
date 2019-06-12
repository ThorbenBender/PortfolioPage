import React from "react";
import styled from "styled-components";
import WindowsLogo from "../../../Icons/WindowsLogo.png";

function WindowsButton() {
  return (
    <StyledWindowsButton>
      <img src={WindowsLogo} alt="WindowsLogo" />
      <p>Start</p>
    </StyledWindowsButton>
  );
}

export default WindowsButton;

const StyledWindowsButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1% 0 1%;
`;
