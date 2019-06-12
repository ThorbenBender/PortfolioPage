import React from "react";
import styled from "styled-components";
import WindowsLogo from "../../../Icons/WindowsLogo.png";

function WindowsButton() {
  return (
    <StyledWindowsButton>
      <StyledWindowsLogo src={WindowsLogo} alt="WindowsLogo" />
      <p>Start</p>
    </StyledWindowsButton>
  );
}

export default WindowsButton;

const StyledWindowsButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5% 0 0.5%;
  height: 70%;
  margin-left: 0.5%;
  border: none;
  border-style: outset;
  border-color: white black black white;
  border-width: 2px;
`;

const StyledWindowsLogo = styled.img``;
