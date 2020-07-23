import React from 'react';
import styled from 'styled-components';

const ContactEmail = (props) => {
  const printOut = (e) => {
    let email = e.target.innerHTML;
    navigator.clipboard.writeText(email).then(() => {
      console.log('Successfull');
    });
  };
  return (
    <StyledContactEmail onClick={printOut}>
      bender.thorben0@gmail.com
    </StyledContactEmail>
  );
};

const StyledContactEmail = styled.p`
  margin-right: 5%;
  &:hover {
    cursor: pointer;
  }
`;

export default ContactEmail;
