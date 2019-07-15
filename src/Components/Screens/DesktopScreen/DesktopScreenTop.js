import React from "react";
import styled from "styled-components";
import DesktopShortcut from "../../Reusable-Components/Shortcuts/DesktopShortCut";
import OpenFolder from "../../Icons/OpenFolder.png";
import AboutMe from "../../Icons/AboutMe.png";

function DesktopScreenTop(props) {
  return (
    <StyledDesktopScreenTop>
      <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Projects Folder"
        shortcutName="Projects"
        onClick={() => {
          props.showModal("Projects");
        }}
      />
      <DesktopShortcut
        imgSource={AboutMe}
        imgAlt="About Me"
        shortcutName="About Me"
        onClick={() => props.showModal("About Me")}
      />
      <DesktopShortcut imgSource={OpenFolder} imgAlt="Perfect Fit Game" shortcutName="Perfect Fit" />
    </StyledDesktopScreenTop>
  );
}

export default DesktopScreenTop;

const StyledDesktopScreenTop = styled.div`
  height: 38.5%;
  background: #008080;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%;
  @media only screen and (max-width: 1870px) {
    max-height: 75%;
  }
`;
