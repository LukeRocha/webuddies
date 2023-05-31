import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import LoginInputs from "../../components/LoginInputs/LoginInputs";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import buddies from "../../assets/images/loginBuddies-mobile.png";
import desktopBuddies from "../../assets/images/desktop-login-buddies.png";
import {
  LoginContainer,
  ModalContainer,
  Title,
  RegisterLink,
  BuddiesContainer,
  ModalWrapper,
  FormContainer,
  FormTitle,
  ErrorMessage,
} from "./styles";

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
                <FormTitle>LOGIN</FormTitle>
                <Input
                  placeholder="nickname"
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      nickname: e.target.value,
                    })
                  }
                  value={userCredentials.nickname}
                />
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
                />
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
