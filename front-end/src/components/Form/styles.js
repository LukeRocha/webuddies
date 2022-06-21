import styled, { css } from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: 0 auto;
  padding: 12px;

  @media (min-width: 900px) {
  }

  @media (min-width: 1200px) {
    width: 50vw;
    justify-content: center;
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 6px auto;
  align-self: center;
  align-content: center;

  @media (min-width: 600px) {
    text-align: left;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 900px) {
    margin: 20px auto;
  }
`;

export const Select = styled.select`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: white;
  background-color: #3a393e;
  border: 1px solid black;
  border-radius: 4px;

  @media (min-width: 480px) {
    width: 230px;
  }
`;

export const Label = styled.label`
  color: white;
  margin: 2px 12px;
  text-align: left;
`;
