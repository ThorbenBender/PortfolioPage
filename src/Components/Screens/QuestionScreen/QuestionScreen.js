import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import AnswerScreen from './StyledAnswerScreen';
import Answers from './Answers';
import RightArrow from '../../Icons/right-arrow.png';
import ApplicationWindowBar from '../../Reusable-Components/ApplicationWindow/ApplicationWindowBar';
import Context from '../../ContextProvider/Context';

const QuestionScreen = props => {
  const {
    highlightApplication,
    hiddenApplication,
    toggleApplication
  } = useContext(Context);
  const [computerAnswer, setComputerAnswer] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [directory, setDirectory] = useState('');

  const style = hiddenApplication.includes(`Questions ${props.folder}`)
    ? { display: 'none' }
    : { marginTop: `${props.index * 1.75}vw`, zIndex: props.index };

  useEffect(() => {
    setComputerAnswer([Answers[props.folder].introduction]);
  }, [props.folder]);
  const askQuestion = event => {
    event.preventDefault();
    let input = parseInt(inputValue);
    if (directory || directory === 0) {
      if (
        input < Answers[props.folder].answers[directory].answers.length &&
        input >= 0
      ) {
        setComputerAnswer(st => [
          ...st,
          Answers[props.folder].answers[directory].answers[input]
        ]);
      } else if (
        input === Answers[props.folder].answers[directory].answers.length
      ) {
        setComputerAnswer(st => [...st, Answers[props.folder].introduction]);
        setDirectory('');
      }
    } else {
      if (input <= Answers[props.folder].answers.length - 1 && input >= 0) {
        setComputerAnswer([
          computerAnswer,
          Answers[props.folder].answers[input].introduction
        ]);
        setDirectory(input);
      } else if (input === 3) {
        props.closeModal(props.screen);
      } else {
        setComputerAnswer(st => [...st, 'Invalid Input!!!']);
      }
    }
    setInputValue('');
  };

  return (
    <StyledApplicationWindow
      key={props.applicationName}
      onClick={e => {
        if (e.target === e.currentTarget) {
          highlightApplication('Pinely');
        }
      }}
      style={style}
    >
      <ApplicationWindowBar
        applicationName={`Questions ${props.folder}`}
        icon={props.icon}
        iconAlt={props.iconAlt}
        toggleApplication={toggleApplication}
      />
      <StyledApplicationWindowScreen>
        <StyledQuestionScreen>
          <StyledComputerAnswers>
            {computerAnswer.map(answer => (
              <AnswerScreen
                answer={answer}
                QuestionScreen={props.QuestionScreen}
              />
            ))}
          </StyledComputerAnswers>
          <StyledForm onSubmit={askQuestion}>
            <StyledUserName>
              User <StyledRightArrow src={RightArrow} alt="Right Arrow" />
            </StyledUserName>
            <StyledQuestionField
              autoFocus
              componentClass="textarea"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              spellCheck="false"
            />
          </StyledForm>
        </StyledQuestionScreen>
      </StyledApplicationWindowScreen>
    </StyledApplicationWindow>
  );
};

export default QuestionScreen;

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

const StyledApplicationWindowScreen = styled.div`
  height: 94%;
`;

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
