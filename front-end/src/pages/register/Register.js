import React from "react";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import { MainContainer, RegisterHeader, Logo, RegisterQuote } from "./styles";
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
