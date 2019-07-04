import React from "react";
import styled from "styled-components";
import ContactMeIcon from "../../../Icons/ContactMe.png";

function ContactMe() {
  return (
    <div>
      <StyledContactMe>
        <img src={ContactMeIcon} alt="Contact Me icon" />
      </StyledContactMe>
    </div>
  );
}

export default ContactMe;

const StyledContactMe = styled.div`
  margin-left: 1vw;
  padding-left: 1vw;
  border-left-style: ridge;
  border-left-color: lightgray;
  background: inherit;
`;
