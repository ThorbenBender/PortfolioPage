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
  cursor: pointer;
  /* border-style: outset;
  border-color: white black black white;
  border-width: 2px; */
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
`;

const StyledWindowsLogo = styled.img``;
