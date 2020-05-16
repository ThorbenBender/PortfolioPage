import React from "react";
import DesktopScreenTop from "./DesktopScreenTop";
import TaskBar from "./TaskBar";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { closeModal, showModal, toggleApplication, onFocus } from "../../../Redux/Action/Index";
import ApplicationWindow from "../../Reusable-Components/ApplicationWindow/ApplicationWindow";
import smallOpenFolder from "../../Icons/smallOpenFolder.png";
import SmallQuestion from "../../Icons/SmallQuestion.png";

class DesktopScreen extends React.Component {
  render() {
    return (
      <StyledDesktopScreen>
        {this.props.modals.includes("Projects") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf("Projects")}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
            showModal={this.props.showModal}
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Pinely") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf("Questions Pinely")}
            applicationName="Questions Pinely"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Guidr") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf("Questions Guidr")}
            applicationName="Questions Guidr"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Flocks") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf("Questions Flocks")}
            applicationName="Questions Flocks"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("About Me") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            onFocus={this.props.onFocus}
            index={this.props.modals.indexOf("About Me")}
            applicationName="About Me"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            toggleApplication={this.props.toggleApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        <DesktopScreenTop showModal={this.props.showModal} />
        <TaskBar toggleApplication={this.props.toggleApplication} />
      </StyledDesktopScreen>
    );
  }
}

const mapStateToProps = state => {
  return { modals: state.modals, hiddenApplication: state.hiddenApplication };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ closeModal, showModal, toggleApplication, onFocus }, dispatch);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DesktopScreen);

const StyledDesktopScreen = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
`;
