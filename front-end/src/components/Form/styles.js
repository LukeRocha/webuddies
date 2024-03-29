import styled, { css } from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: 0 auto;
  padding: 12px;
  background-color: var(--modal-background);
  width: 95vw;

  @media (min-width: 500px) {
    width: 70vw;
    /* width: calc(40% - 4px); */
    /* width: 400px; */
    margin-left: auto;
    margin-right: auto;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
    gap: 2px;
  }

  @media (min-width: 900px) {
    width: 400vw;
    max-width: 500px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 6px auto;
  align-self: center;
  align-content: center;

  @media (min-width: 500px) {
    max-width: 33vw;
    text-align: left;
    align-items: center;
    padding: 2px;
  }

  @media (min-width: 900px) {
    margin: 20px auto;
  }
`;

export const Select = styled.select`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: #fff;
  background-color: var(--inputs-background);
  border: 1px solid #000;
  border-radius: 4px;

  @media (min-width: 480px) {
    width: 230px;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin: 2px 12px;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin: 6px auto;
  align-self: center;
  align-content: center;
  gap: 20px;

  @media (min-width: 500px) {
    max-width: 33vw;
    text-align: left;
    align-items: center;
    padding: 2px;
  }

  @media (min-width: 900px) {
    margin: 20px auto;
  }
`;
