import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showApplication } from "../../../../Redux/Action/Index";
import styled from "styled-components";

function OpenApplications(props) {
  return (
    <StyledOpenApplications>
      {props.modals.map(modal => (
        <StyledOpenApplication onClick={() => props.showApplication(modal)}>{modal}</StyledOpenApplication>
      ))}
    </StyledOpenApplications>
  );
}

const mapStateToProps = state => {
  return {
    modals: state.modals
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showApplication }, dispatch);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OpenApplications);

const StyledOpenApplications = styled.div`
  margin-left: 4vw;
  width: 80vw;
  display: flex;
`;

const StyledOpenApplication = styled.p`
  border: outset;
  height: 100%;
  width: 8vw;
  margin-right: 0.5vw;
  padding: 0.5vh 0;
  text-align: center;
  cursor: pointer;
`;
