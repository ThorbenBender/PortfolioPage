import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
class TimeDisplay extends React.Component {
  state = {
    time: new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1"),
    showDate: false,
    date: days[new Date().getDay()] + ", " + new Date().toLocaleDateString()
  };
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1"),
      date: days[new Date().getDay()] + ", " + new Date().toLocaleDateString()
    });
  }

  showDate = () => {
    this.setState({ showDate: true });
  };

  hideDate = () => {
    this.setState({ showDate: false });
  };

  render() {
    return (
      <StyledTimeDisplay>
        <Popup
          trigger={
            <StyledTime onMouseEnter={this.showDate} onMouseLeave={this.hideDate}>
              {this.state.time}
            </StyledTime>
          }
          position="top center"
          on="hover"
          mouseLeaveDelay={200}
          mouseEnterDelay={0}
          contentStyle={{
            padding: "0px",
            height: "2.5vh",
            display: "flex",
            alignItems: "center",
            width: "6.5vw",
            marginBottom: "3vh",
            fontSize: ".9rem"
          }}
          offsetY={12}
          arrow={false}>
          {!this.state.showDate && <StyledFullDate>{this.state.date}</StyledFullDate>}
        </Popup>
      </StyledTimeDisplay>
    );
  }
}

export default TimeDisplay;

const StyledTimeDisplay = styled.div`
  margin-left: 87vw;
`;

const StyledTime = styled.p``;

const StyledFullDate = styled.p`
  display: flex;
  align-items: center;
`;
