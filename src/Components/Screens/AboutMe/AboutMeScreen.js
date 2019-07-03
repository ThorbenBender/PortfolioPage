import React from "react";
import styled from "styled-components";

export default function AboutMeScreen() {
  return (
    <StyledAboutMeScreen>
      <StyledIntroduction>
        <p>
          Hello, my name is Thorben Bender. I'm a web developer from Germany. Right now I am taking part in the full
          stack web development course at Lambda School. If you want to find more about me, just click on the links
          below.
        </p>
      </StyledIntroduction>
      <StyledInformationLinks>
        <StyledInformationLink href="https://github.com/ThorbenBender" target="_blank">
          Github
        </StyledInformationLink>
        <StyledInformationLink
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-22183.appspot.com/o/Resume.pdf?alt=media&token=3da18e20-7a70-4e3f-b774-41a11f459fec"
          target="_blank">
          Resume
        </StyledInformationLink>
        <StyledInformationLink href="https://www.linkedin.com/in/thorben-bender/" target="_blank">
          LinkedIn
        </StyledInformationLink>
      </StyledInformationLinks>
      <StyledContactMeContainer>
        <StyledContactMe>You can as well just contact me, by clicking here</StyledContactMe>
        <StyledContactMeLink>Contact Me</StyledContactMeLink>
      </StyledContactMeContainer>
    </StyledAboutMeScreen>
  );
}

const StyledAboutMeScreen = styled.div`
  padding: 0.75%;
`;

const StyledIntroduction = styled.div``;

const StyledInformationLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInformationLink = styled.a`
  margin-bottom: 1vh;
  color: blue;
`;

const StyledContactMeContainer = styled.div``;
const StyledContactMe = styled.p``;

const StyledContactMeLink = styled.p`
  text-decoration: underline;
  color: blue;
`;
