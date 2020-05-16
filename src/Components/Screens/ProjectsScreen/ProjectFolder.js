import React from 'react';
import styled from 'styled-components';
import WebsiteIcon from '../../Icons/Website2.png';
import GitHubIcon from '../../Icons/Octocat.png';
import QuestionIcon from '../../Icons/Questions.png';

function ProjectFolder(props) {
  return (
    <StyledProjectFolder>
      <StyledProjectOptions>
        {props.websiteLink && (
          <StyledProjectOptionAnchor href={props.websiteLink} target="_blank">
            <StyledProjectOptionIcon src={WebsiteIcon} alt="Website Icon" />
            <StyledProjectOptionName>Website</StyledProjectOptionName>
          </StyledProjectOptionAnchor>
        )}
        <StyledProjectOptionAnchor href={props.githubLink} target="_blank">
          <StyledProjectOptionGithubIcon src={GitHubIcon} alt="Github Icon" />
          <StyledProjectOptionName>Github</StyledProjectOptionName>
        </StyledProjectOptionAnchor>
        <StyledTaskBarOption
          onClick={() => props.showModal(`Questions ${props.folder}`)}
        >
          <StyledProjectOptionIcon src={QuestionIcon} alt="Question Icon" />
          <StyledProjectOptionName>Questions</StyledProjectOptionName>
        </StyledTaskBarOption>
      </StyledProjectOptions>
    </StyledProjectFolder>
  );
}

export default ProjectFolder;

const StyledProjectOptions = styled.div`
  background: white;
  height: 80%;
  width: 98%;
  margin: 0 auto;
  border: inset;
  display: flex;
`;

const StyledProjectFolder = styled.div`
  height: 100%;
`;

const StyledTaskBarOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2%;
  height: 25%;
  width: 6%;
  align-items: center;
  cursor: pointer;
`;

const StyledProjectOptionIcon = styled.img`
  width: 80%;
`;

const StyledProjectOptionName = styled.p`
  margin-top: 10px;
`;

const StyledProjectOptionAnchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2%;
  height: 25%;
  width: 6%;
  align-items: center;
`;

const StyledProjectOptionGithubIcon = styled.img`
  width: 80%;
  height: 42.5%;
`;
