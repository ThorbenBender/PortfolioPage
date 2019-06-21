import React from "react";
import styled from "styled-components";
import AnswerScreen from "./StyledAnswerScreen";
import Answers from "./Answers";
import RightArrow from "../../Icons/right-arrow.png";

class QuestionScreen extends React.Component {
  state = {
    computerAnswer: [],
    inputValue: "",
    directory: ""
  };
  componentDidMount = () => {
    this.setState(st => ({
      computerAnswer: [Answers[this.props.QuestionScreen].introduction]
    }));
  };

  onChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };
  askQuestion = event => {
    event.preventDefault();
    let input = parseInt(this.state.inputValue);
    if (this.state.directory || this.state.directory === 0) {
      if (input < Answers[this.props.QuestionScreen].answers[this.state.directory].answers.length && input >= 0) {
        this.setState(st => ({
          computerAnswer: [
            ...st.computerAnswer,
            Answers[this.props.QuestionScreen].answers[this.state.directory].answers[input]
          ]
        }));
      } else if (input === Answers[this.props.QuestionScreen].answers[this.state.directory].answers.length) {
        this.setState(st => ({
          computerAnswer: [...st.computerAnswer, Answers[this.props.QuestionScreen].introduction],
          directory: ""
        }));
      }
    } else {
      if (input <= Answers[this.props.QuestionScreen].answers.length - 2 && input >= 0) {
        this.setState(st => ({
          computerAnswer: [...st.computerAnswer, Answers[this.props.QuestionScreen].answers[input].introduction],
          directory: input
        }));
      } else if (input === 3) {
        this.props.closeModal(this.props.screen);
      } else {
        this.setState(st => ({
          computerAnswer: [...st.computerAnswer, "Invalid Input!!!"]
        }));
      }
    }
    this.setState({ inputValue: "" });
  };
  render() {
    return (
      <StyledQuestionScreen>
        <StyledComputerAnswers>
          {this.state.computerAnswer.map(answer => (
            <AnswerScreen answer={answer} QuestionScreen={this.props.QuestionScreen} />
          ))}
        </StyledComputerAnswers>
        <StyledForm onSubmit={this.askQuestion}>
          <StyledUserName>
            User <StyledRightArrow src={RightArrow} alt="Right Arrow" />
          </StyledUserName>
          <StyledQuestionField
            componentClass="textarea"
            value={this.state.inputValue}
            onChange={this.onChangeHandler}
            spellCheck="false"
          />
        </StyledForm>
      </StyledQuestionScreen>
    );
  }
}

export default QuestionScreen;

const StyledQuestionScreen = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  color: white;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const StyledComputerAnswers = styled.Typing``;

const StyledQuestionField = styled.input`
  background: black;
  border: none;
  color: white;
  width: 99%;
  &:focus {
    outline: none;
  }
`;

const StyledComputerAnswers = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledRightArrow = styled.img`
  color: white;
`;

const StyledUserName = styled.p`
  margin-right: 0.5vw;
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: baseline;
`;
