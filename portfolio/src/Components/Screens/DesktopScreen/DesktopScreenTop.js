import React from "react";
import styled from "styled-components";
import DesktopShortcut from "../../Reusable-Components/Shortcuts/DesktopShortCut";
import OpenFolder from "../../Icons/OpenFolder.png";
import AboutMe from "../../Icons/AboutMe.png";
import ContactInfo from "../../Icons/ContactInfo.png";

function DesktopScreenTop() {
  return (
    <StyledDesktopScreenTop>
      <DesktopShortcut imgSource={OpenFolder} imgAlt="Projects Folder" shortcutName="Projects" />
      <DesktopShortcut imgSource={AboutMe} imgAlt="About Me" shortcutName="About Me" />
      <DesktopShortcut imgSource={ContactInfo} imgAlt="Contact Info" shortcutName="Contact Info" />
      <DesktopShortcut imgSource={OpenFolder} imgAlt="Perfect Fit Game" shortcutName="Perfect Fit" />
    </StyledDesktopScreenTop>
  );
}

export default DesktopScreenTop;

const StyledDesktopScreenTop = styled.div`
  height: 76.1%;
  background: #008080;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%;
`;
