import React from "react";
import ApplicationWindowBar from "./ApplicationWindowBar";
import ApplicationWindowScreen from "./ApplicationWindowScreen";
import styled from "styled-components";

class ApplicationWindow extends React.Component {
  render() {
    const style = this.props.hiddenApplication.includes(this.props.applicationName)
      ? { display: "none" }
      : { marginTop: `${this.props.index * 1.75}vw`, zIndex: this.props.index };
    return (
      <StyledApplicationWindow key={this.props.applicationName} style={style}>
        <ApplicationWindowBar
          closeModal={this.props.closeModal}
          applicationName={this.props.applicationName}
          icon={this.props.icon}
          iconAlt={this.props.iconAlt}
          toggleApplication={this.props.toggleApplication}
        />
        <ApplicationWindowScreen screen={this.props.applicationName} closeModal={this.props.closeModal} />
      </StyledApplicationWindow>
    );
  }
}

export default ApplicationWindow;

const StyledApplicationWindow = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 20vh;
  left: 30vw;
  height: 40%;
  width: 35%;
  background: #bfc7c9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: outset;
`;
