import React from "react";
import ProjectsScreen from "../../Screens/ProjectsScreen/ProjectScreen";
import styled from "styled-components";
import QuestionScreen from "../../Screens/QuestionScreen/QuestionScreen";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";

function ApplicationWindowScreen(props) {
  return (
    <StyledApplicationWindowScreen>
      {props.screen === "Projects" && <ProjectsScreen />}
      {props.screen === "Questions Flocks" && (
        <QuestionScreen screen={props.screen} QuestionScreen="Flocks" closeModal={props.closeModal} />
      )}
      {props.screen === "Questions Pinely" && (
        <QuestionScreen screen={props.screen} QuestionScreen="Pinely" closeModal={props.closeModal} />
      )}
      {props.screen === "Questions Guidr" && (
        <QuestionScreen screen={props.screen} QuestionScreen="Guidr" closeModal={props.closeModal} />
      )}
    </StyledApplicationWindowScreen>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ApplicationWindowScreen);

const StyledApplicationWindowScreen = styled.div`
  height: 94%;
`;
