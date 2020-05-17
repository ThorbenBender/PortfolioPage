import React, { useContext } from 'react';
import styled from 'styled-components';
import DesktopShortcut from '../../Reusable-Components/Shortcuts/DesktopShortCut';
import OpenFolder from '../../Icons/OpenFolder.png';
import AboutMe from '../../Icons/AboutMe.png';
import Context from '../../ContextProvider/Context';

function DesktopScreenTop(props) {
  const { addModal } = useContext(Context);
  return (
    <StyledDesktopScreenTop>
      <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Pinely"
        shortcutName="Pinely"
        onClick={() => {
          addModal('Pinely');
        }}
      />
      <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Guidr"
        shortcutName="Guidr"
        onClick={() => {
          props.showModal('Guidr');
        }}
      />
      <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Flocks"
        shortcutName="Flocks"
        onClick={() => {
          props.showModal('Flocks');
        }}
      />
      {/* <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Projects Folder"
        shortcutName="Projects"
        onClick={() => {
          props.showModal("Projects");
        }}
      /> */}
      <DesktopShortcut
        imgSource={AboutMe}
        imgAlt="About Me"
        shortcutName="About Me"
        onClick={() => props.showModal('About Me')}
      />
      {/* <DesktopShortcut imgSource={OpenFolder} imgAlt="Perfect Fit Game" shortcutName="Perfect Fit" /> */}
    </StyledDesktopScreenTop>
  );
}

export default DesktopScreenTop;

const StyledDesktopScreenTop = styled.div`
  height: 88%;
  background: #008080;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%;
`;
