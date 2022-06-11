import React from "react";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import buddies from "../assets/images/loginBuddies-mobile.png";

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  display: flex;
  width: 350px;
  color: #a32fff;
  font-size: 5em;
  margin: 0 auto;
`;

const RegisterLink = styled.a`
  color: white;
  text-align: center;
  margin: 10px;
`;

const BuddiesContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: 0 auto;
  botttom: 0;
`;
const Login = () => {
  return (
    <>
      <ModalContainer>
        <Title>we Buddies</Title>
        <Modal>
          <Input placeholder="username"></Input>
          <Input type="password" placeholder="password"></Input>
          <RegisterLink>{"Forgot my password"}</RegisterLink>
          <Button bg={"var(--green-button)"}>Login</Button>
        </Modal>
        <Button bg={"var(--purple-button)"}>Become a buddy!</Button>
      </ModalContainer>
      <BuddiesContainer>
        <img src={buddies} alt="buddies" />
      </BuddiesContainer>
    </>
  );
};

export default Login;
