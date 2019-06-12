import React from "react";
import styled from "styled-components";

function DesktopShortCut(props) {
  return (
    <StyledDesktopShortCut>
      <StyledShortcutIcon src={props.imgSource} alt={props.imgAlt} />
      <StyledShortCutName>{props.shortcutName}</StyledShortCutName>
    </StyledDesktopShortCut>
  );
}

export default DesktopShortCut;

const StyledDesktopShortCut = styled.div`
  padding-left: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 5%;
`;

const StyledShortCutName = styled.p`
  color: white;
  margin-top: 10%;
`;

const StyledShortcutIcon = styled.img`
  padding-top: 1%;
  /* align-self: center; */
`;
