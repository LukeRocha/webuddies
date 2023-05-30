import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginInputs from "../components/LoginInputs/LoginInputs";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import buddies from "../assets/images/loginBuddies-mobile.png";
import desktopBuddies from "../assets/images/desktop-login-buddies.png";

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;

    padding: 30px;
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
    width: 70vw;
  } ;
`;

const Title = styled.h1`
  display: flex;
  width: 350px;
  color: var(--purple-button);
  font-size: 5em;
  margin: 12px auto;
`;

const RegisterLink = styled.a`
  color: #fff;
  text-align: center;
  margin: 10px;
`;

const BuddiesContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: 0 auto;
  bottom: 0;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    align-items: center;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 18px;
`;
const ErrorMessage = styled.span`
  display: flex;
  text-align: center;
  color: red;
  padding: 8px;
`;
const Login = () => {
  const { state, authUserCredentials } = useGlobalContext();
  const navigate = useNavigate();
  const [size, setSize] = useState(window.innerWidth);
  const [userCredentials, setUserCredentials] = useState({
    nickname: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const checkWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    console.log(state);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [state]);

  return (
    <LoginContainer>
      <ModalContainer>
        <Title>we Buddies</Title>
        <LoginInputs>
          <ModalWrapper>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await authUserCredentials(userCredentials);
                  navigate("/profile");
                } catch (error) {
                  setErrorMessage(error.error);
                }
              }}
            >
              <FormContainer>
                <Input
                  placeholder="nickname"
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      nickname: e.target.value,
                    })
                  }
                  value={userCredentials.nickname}
                ></Input>
                <Input
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setUserCredentials({
                      ...userCredentials,
                      password: e.target.value,
                    });
                  }}
                  value={userCredentials.password}
                ></Input>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <RegisterLink>{"Forgot my password"}</RegisterLink>
                <Link to="profile">
                  <Button
                    bg={"var(--green-button)"}
                    type="submit"
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        await authUserCredentials(userCredentials);
                        navigate("/profile");
                      } catch (error) {
                        console.log(error.error);
                        setErrorMessage(error.error);
                      }
                      authUserCredentials(userCredentials);
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </FormContainer>
            </form>
          </ModalWrapper>
        </LoginInputs>

        <Link to="/register">
          <Button className="button-Link" bg={"var(--purple-button)"}>
            Become a buddy!
          </Button>
        </Link>
      </ModalContainer>
      <BuddiesContainer>
        <img src={size < 1200 ? buddies : desktopBuddies} alt="buddies" />
      </BuddiesContainer>
    </LoginContainer>
  );
};

export default Login;
