import React from "react";
import styled from "styled-components";

export default function AboutMeScreen() {
  return (
    <div>
      <StyledIntroduction>
        <p>
          Hello, my name is Thorben Bender. I'am Web Developer from germany. Right now i'am taking part in the fullstack
          web development course at Lambda School. If you want to find more about me, just clicked on the links below.
        </p>
      </StyledIntroduction>
      <StyledInformationLinks>
        <StyledInformationLink href="https://www.linkedin.com/in/thorben-bender/">Github</StyledInformationLink>
        <StyledInformationLink href="">Resume</StyledInformationLink>
        <StyledInformationLink href="https://www.linkedin.com/in/thorben-bender/">LinkedIn</StyledInformationLink>
      </StyledInformationLinks>
    </div>
  );
}

const StyledIntroduction = styled.div``;

const StyledInformationLinks = styled.div``;

const StyledInformationLink = styled.a``;
