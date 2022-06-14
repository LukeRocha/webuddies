import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import buddies from "../assets/images/loginBuddies-mobile.png";
import desktopBuddies from "../assets/images/desktop-login-buddies.png";

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;

    padding: 50px;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;

  @media (min-width: 600px) {
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    align-items: center;
    align-content: center;
    width: 70vw;
    margin: 0 auto;
  } ;
`;

const Title = styled.h1`
  display: flex;
  width: 350px;
  color: #a32fff;
  font-size: 5em;
  margin: 12px auto;
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

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <LoginContainer>
      <ModalContainer>
        <Title>we Buddies</Title>
        <Modal>
          <ModalWrapper>
            <Input placeholder="username"></Input>
            <Input type="password" placeholder="password"></Input>
            <RegisterLink>{"Forgot my password"}</RegisterLink>
            <Button bg={"var(--green-button)"}>Login</Button>
          </ModalWrapper>
        </Modal>

        <Button bg={"var(--purple-button)"}>Become a buddy!</Button>
      </ModalContainer>
      <BuddiesContainer>
        <img src={size < 1200 ? buddies : desktopBuddies} alt="buddies" />
      </BuddiesContainer>
    </LoginContainer>
  );
};

export default Login;
