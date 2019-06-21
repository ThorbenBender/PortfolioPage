import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import RightArrow from "../../Icons/right-arrow.png";

class AnswerScreen extends React.Component {
  //   messageEndRef = useRef(null);
  render() {
    return (
      <StyledAnswerScreen>
        <StyledFolderName>
          {this.props.QuestionScreen}
          <StyledRightArrow src={RightArrow} alt="Right Arrow" />
        </StyledFolderName>
        <Typing speed={1}>
          <StyledSpan>{this.props.answer}</StyledSpan>
        </Typing>
      </StyledAnswerScreen>
    );
  }
}

export default AnswerScreen;

const StyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  max-height: 90%;
  white-space: pre-wrap;
`;

const StyledAnswerScreen = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledFolderName = styled.p`
  margin-right: 0.5vw;
  display: flex;
  align-items: center;
`;

const StyledRightArrow = styled.img`
  color: white;
`;
