import React from "react";
import styled from "styled-components";

class TimeDisplay extends React.Component {
  state = {
    time: new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
  };
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
    });
  }

  render() {
    return (
      <StyledTimeDisplay>
        <StyledTime>{this.state.time}</StyledTime>
      </StyledTimeDisplay>
    );
  }
}

export default TimeDisplay;

const StyledTimeDisplay = styled.div`
  position: fixed;
  right: 1vw;
  border-left-style: ridge;
  border-left-color: lightgray;
  height: 2vh;
  vertical-align: center;
  padding-left: 1vw;
  /* bottom: 2.45vh; */
`;

const StyledTime = styled.p`
  margin: 0;
`;
