import { React, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { registerValidation } from "../../Validations/registerValidation";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-itens: center;
`;

const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 4px auto;
`;

const Label = styled.label`
  color: white;
  margin: 0 12px;
`;

const Select = styled.select`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: white;
  background-color: #3a393e;
  border: 1px solid black;
  border-radius: 4px;
`;

const Form = () => {
  const [userInputs, setUserInputs] = useState({
    nickname: "",
    first_name: "",
    last_name: "",
    birth: "",
    city: "",
    country: "",
    mail: "",
    phone: "",
    password: "",
    rePassword: "",
  });

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        registerValidation(userInputs);
      }}
    >
      <InputContainer>
        <Label htmlFor="nick">Nickname</Label>
        <Input
          id="nick"
          type="text"
          onChange={(e) =>
            setUserInputs({ ...userInputs, nickname: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <Label>First name</Label>
        <Input
          type="text"
          onChange={(e) =>
            setUserInputs({ ...userInputs, first_name: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <Label>Last name</Label>
        <Input
          type="text"
          onChange={(e) =>
            setUserInputs({ ...userInputs, last_name: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <Label>E-mail </Label>
        <Input
          type="text"
          onChange={(e) =>
            setUserInputs({ ...userInputs, mail: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <Label>Birth</Label>
        <Input
          type="date"
          onChange={(e) =>
            setUserInputs({ ...userInputs, birth: e.target.value })
          }
        />
      </InputContainer>

      <InputContainer>
        <Label>City</Label>
        <Select
          onChange={(e) =>
            setUserInputs({ ...userInputs, city: e.target.value })
          }
        >
          <option value="Guarujá">Guarujá</option>
          <option value="Santos">Santos</option>
          <option value="São Vicente">São Vicente</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Praia Grande">Praia Grande</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Label>Country</Label>
        <Select
          onChange={(e) =>
            setUserInputs({ ...userInputs, country: e.target.value })
          }
        >
          <option value="Brazil">Brazil</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Label>Phone</Label>
        <Input
          type="text"
          onChange={(e) =>
            setUserInputs({ ...userInputs, phone: e.target.value })
          }
        />
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Input Nickname"
          onChange={(e) =>
            setUserInputs({ ...userInputs, password: e.target.value })
          }
        />
      </InputContainer>

      <InputContainer>
        <Label>Confrm password</Label>
        <Input
          type="password"
          placeholder="Input Nickname"
          onChange={(e) =>
            setUserInputs({ ...userInputs, rePassword: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <Button bg={"green"} type="submit">
          Submit
        </Button>
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
