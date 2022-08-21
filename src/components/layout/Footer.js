import React from "react";
import styled from "styled-components";
import Container from "../common/container";

const StyledFooter = styled.footer`
  width: 100vw;
  border: 1px solid #000;
  padding: 20px 0;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Container>footer</Container>
      </StyledFooter>
    </div>
  );
};

export default Footer;
