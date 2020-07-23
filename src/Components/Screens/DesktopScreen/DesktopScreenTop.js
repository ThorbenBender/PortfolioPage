import React, { useContext } from 'react';
import styled from 'styled-components';
import DesktopShortcut from '../../Reusable-Components/Shortcuts/DesktopShortCut';
import OpenFolder from '../../Icons/OpenFolder.png';
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
          addModal('Guidr');
        }}
      />
      <DesktopShortcut
        imgSource={OpenFolder}
        imgAlt="Flocks"
        shortcutName="Flocks"
        onClick={() => {
          addModal('Flocks');
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
