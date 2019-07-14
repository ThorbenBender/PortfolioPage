import React from "react";
import DesktopScreenTop from "./DesktopScreenTop";
import TaskBar from "./TaskBar";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { closeModal, showModal, hideApplication } from "../../../Redux/Action/Index";
import ApplicationWindow from "../../Modals/ApplicationWindow";
import smallOpenFolder from "../../Icons/smallOpenFolder.png";
import SmallQuestion from "../../Icons/SmallQuestion.png";

class DesktopScreen extends React.Component {
  render() {
    console.log(this.props.modals.indexOf("Projects"));
    return (
      <StyledDesktopScreen onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e, "complete")}>
        {this.props.modals.includes("Projects") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            index={this.props.modals.indexOf("Projects")}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
            showModal={this.props.showModal}
            hideApplication={this.props.hideApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Pinely") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            applicationName="Questions Pinely"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            hideApplication={this.props.hideApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Guidr") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            applicationName="Questions Guidr"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            hideApplication={this.props.hideApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("Questions Flocks") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            applicationName="Questions Flocks"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            hideApplication={this.props.hideApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        {this.props.modals.includes("About Me") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            applicationName="About Me"
            icon={SmallQuestion}
            iconAlt="Small Question Icon"
            hideApplication={this.props.hideApplication}
            hiddenApplication={this.props.hiddenApplication}
          />
        )}
        <DesktopScreenTop showModal={this.props.showModal} />
        <TaskBar showModal={this.props.showModal} />
      </StyledDesktopScreen>
    );
  }
}

const mapStateToProps = state => {
  return { modals: state.modals, hiddenApplication: state.hiddenApplication };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ closeModal, showModal, hideApplication }, dispatch);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DesktopScreen);

const StyledDesktopScreen = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;
