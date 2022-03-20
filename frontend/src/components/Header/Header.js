import React from "react";
import image from "../../assets/images/plain-logo.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100vw;
  overflow-x: hidden;
  align-self: center;
  background-color: black;
`;

const Image = styled.img`
  /* margin: 0 auto; */
  padding: 5px;
`;
function Header() {
  return (
    <StyledHeader>
      <Image src={image} alt="webuddies logo" />
    </StyledHeader>
  );
}

export default Header;
