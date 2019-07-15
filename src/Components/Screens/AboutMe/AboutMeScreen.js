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
        <StyledContactMe>You can contact me by pressing the button here</StyledContactMe>
        <StyledContactMeLink href="mailto:bender.thorben0@gmail.com">Contact Me</StyledContactMeLink>
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
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const StyledInformationLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.5% 0 0.5%;
  height: 70%;
  margin-left: 0.5%;
  border: none;
  cursor: pointer;
  padding: 0.5% 4.5% 0.5% 4.5%;
  text-decoration: none;
  color: black;
  /* border-style: outset;
  border-color: white black black white;
  border-width: 2px; */
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
`;

const StyledContactMeContainer = styled.div``;
const StyledContactMe = styled.p``;

const StyledContactMeLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.5% 0 0.5%;
  height: 70%;
  margin-left: 0.5%;
  border: none;
  cursor: pointer;
  padding: 0.5% 4.5% 0.5% 4.5%;
  text-decoration: none;
  color: black;
  /* border-style: outset;
  border-color: white black black white;
  border-width: 2px; */
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
  width: 10%;
`;
