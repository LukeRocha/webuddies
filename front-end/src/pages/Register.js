import React from "react";
import styled from "styled-components";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const FormBackground = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`;

const FormModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  position: absolute;

  margin: 10px;
  padding: 20px;
  background-color: #242424;
  border-radius: 4px;
`;

const LogoHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 18px auto;
`;

const Logo = styled.h1`
  color: #a32fff;
  font-size: 2.8em;
`;

const HeaderQuote = styled.p`
  color: white;
`;

const Form = () => {
  return (
    <>
      <FormBackground>
        <FormModal>
          <LogoHeader>
            <Logo>
              we
              <br />
              Buddies
            </Logo>
            <HeaderQuote>{"Create you account, it's easy"}</HeaderQuote>
          </LogoHeader>
          <Input placeholder="Nickname"></Input>
          <Input placeholder="first name"></Input>
          <Input placeholder="last name"></Input>
          <Input type="date" placeholder="Birth"></Input>
          <Input placeholder="City"></Input>
          <Input placeholder="Country"></Input>
          <Input placeholder="e-mail"></Input>
          <Input type="password" placeholder="choose password"></Input>
          <Input type="password" placeholder="confirm password"></Input>
          <Button bg={"#6FB794"}>Submit</Button>
        </FormModal>
      </FormBackground>
    </>
  );
};

export default Form;
