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
        imgSource="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-23aecd336bd5996c56185f4a74559e7b.png"
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
      <DesktopShortcut
        imgSource="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-b8e5723076a74ca155c3f4981d7c027b.png"
        imgAlt="LinkedIn"
        shortcutName="LinkedIn"
        onClick={() => {
          window.open('https://www.linkedin.com/in/thorben-bender/', '_blank');
        }}
      />
      <DesktopShortcut
        imgSource="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-b8e5723076a74ca155c3f4981d7c027b.png"
        imgAlt="Github"
        shortcutName="Github"
        onClick={() => {
          window.open('https://github.com/thorbenbender', '_blank');
        }}
      />
      <DesktopShortcut
        imgSource="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-d953eae04c477f608abfcd25bce21829.png"
        imgAlt="Resume"
        shortcutName="Resume"
        onClick={() => {
          window.open(
            'https://firebasestorage.googleapis.com/v0/b/portfolio-22183.appspot.com/o/Thorben%20Bender%20-%20Resume.pdf?alt=media&token=09575d9a-d1e3-4816-87a6-3faf9ece996d',
            '_blank'
          );
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
