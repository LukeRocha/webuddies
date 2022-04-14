import React from "react";
import styled from "styled-components";
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RegisterHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 8px auto;
`;

const Logo = styled.h1`
  color: #a32fff;
  font-size: 2.8em;
  margin: 20px auto;
`;

const RegisterMessage = styled.p`
  color: white;
`;

const Register = () => {
  return (
    <>
      <MainContainer>
        <RegisterHeader>
          <Logo>
            we
            <br />
            Buddies
          </Logo>
          <RegisterMessage>
            {"Create your account, it's easy :D"}
          </RegisterMessage>
        </RegisterHeader>
      </MainContainer>
    </>
  );
};

export default Register;
