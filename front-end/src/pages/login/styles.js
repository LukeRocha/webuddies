import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    padding: 30px;
    height: 100vh;
    max-height: 100%;
    overflow: hidden;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;

  @media (min-width: 600px) {
    margin: 10px auto;
  }
  @media (min-width: 1200px) {
    width: 70vw;
  } ;
`;

export const Title = styled.h1`
  display: flex;
  width: 350px;
  color: var(--purple-button);
  font-size: 5em;
  margin: 12px auto;
`;

export const FormTitle = styled.h1`
  color: white;
  align-self: center;
  padding: 4px;
  font-size: 2rem;
  font-weight: bolder;
`;

export const RegisterLink = styled.a`
  color: #fff;
  text-align: center;
  margin: 10px;
`;

export const BuddiesContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: 0 auto;
  bottom: 0;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;
`;
export const ErrorMessage = styled.span`
  display: flex;
  text-align: center;
  color: red;
  padding: 8px;
`;
