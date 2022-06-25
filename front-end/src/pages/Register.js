import React from "react";
import styled from "styled-components";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RegisterHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 20px auto;
  text-align: center;
`;

const Logo = styled.h1`
  color: var(--purple-button);
  font-size: 2.8em;
  margin: 0px auto;
`;

const RegisterQuote = styled.p`
  color: #fff;
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
          <RegisterQuote>{"Create your account, it's easy :D"}</RegisterQuote>
        </RegisterHeader>

        <Form />
      </MainContainer>
    </>
  );
};

export default Register;
