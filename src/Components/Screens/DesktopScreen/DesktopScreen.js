import React, { useContext } from 'react';
import DesktopScreenTop from './DesktopScreenTop';
import TaskBar from './TaskBar';
import styled from 'styled-components';
import Context from '../../ContextProvider/Context';
import Pinely from '../Pinely';
import Guidr from '../Guidr';
import Flocks from '../Flocks';
import QuestionScreen from '../QuestionScreen/QuestionScreen';
import AboutMeScreen from '../AboutMe/AboutMeScreen';

const DesktopScreen = props => {
  const { modals } = useContext(Context);
  console.log(modals);
  return (
    <StyledDesktopScreen>
      {modals.includes('Pinely') && <Pinely index={modals.indexOf('Pinely')} />}
      {modals.includes('Guidr') && <Guidr index={modals.indexOf('Guidr')} />}
      {modals.includes('Flocks') && <Flocks index={modals.indexOf('Flocks')} />}
      {modals.includes('Questions Pinely') && (
        <QuestionScreen
          folder="Pinely"
          index={modals.indexOf('Questions Pinely')}
        />
      )}
      {modals.includes('Questions Guidr') && (
        <QuestionScreen
          folder="Guidr"
          index={modals.indexOf('Questions Guidr')}
        />
      )}
      {modals.includes('Questions Flocks') && (
        <QuestionScreen
          folder="Flocks"
          index={modals.indexOf('Questions Flocks')}
        />
      )}
      {modals.includes('About Me') && (
        <AboutMeScreen index={modals.indexOf('About Me')} />
      )}
      {/* {this.props.modals.includes('Guidr') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Projects')}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
            showModal={this.props.showModal}
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('Flocks') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Projects')}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
            showModal={this.props.showModal}
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('Projects') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Projects')}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
            showModal={this.props.showModal}
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('Questions Pinely') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Questions Pinely')}
            applicationName="Questions Pinely"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('Questions Guidr') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Questions Guidr')}
            applicationName="Questions Guidr"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('Questions Flocks') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('Questions Flocks')}
            applicationName="Questions Flocks"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes('About Me') && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf('About Me')}
            applicationName="About Me"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )} */}
      <DesktopScreenTop showModal={props.showModal} />
      <TaskBar toggleApplication={props.toggleApplication} />
    </StyledDesktopScreen>
  );
};

export default DesktopScreen;

const StyledDesktopScreen = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
`;
