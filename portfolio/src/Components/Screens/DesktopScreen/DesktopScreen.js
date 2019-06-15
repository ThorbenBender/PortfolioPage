import React from "react";
import DesktopScreenTop from "./DesktopScreenTop";
import TaskBar from "./TaskBar";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { closeModal, showModal } from "../../../Redux/Action/Index";
import ApplicationWindow from "../../Modals/ApplicationWindow";
import smallOpenFolder from "../../Icons/smallOpenFolder.png";
class DesktopScreen extends React.Component {
  render() {
    console.log(this.props.modals.includes("Projects"));

    return (
      <StyledDesktopScreen>
        {this.props.modals.includes("Projects") && (
          <ApplicationWindow
            closeModal={this.props.closeModal}
            applicationName="Projects"
            icon={smallOpenFolder}
            iconAlt="OpenFolder"
          />
        )}
        {console.log(this.props.modals.includes("Projects"))}
        <DesktopScreenTop showModal={this.props.showModal} />
        <TaskBar />
      </StyledDesktopScreen>
    );
  }
}

const mapStateToProps = state => {
  return { modals: state.modals };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ closeModal, showModal }, dispatch);
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
