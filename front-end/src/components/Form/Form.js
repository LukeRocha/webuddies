import { React, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context";
import { registerValidation } from "../../Validations/registerValidation";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  margin: 0 auto;

  padding: 10px;
  background-color: #242424;
  border-radius: 4px;
`;

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
    <StyledModal>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          registerValidation(userInputs);
        }}
      >
        <InputContainer>
          <Label>Nickname</Label>
          <Input
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
            <option value="Bhutan">Santos</option>
            <option value="Bolivia">São Vicente</option>
            <option value="Bolivia">Guarujá</option>
            <option value="Bolivia">Praia Grande</option>
            <option value="Bonaire">São Paulo</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Label>Country</Label>
          <Select
            onChange={(e) =>
              setUserInputs({ ...userInputs, country: e.target.value })
            }
          >
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Botswana">Botswana</option>
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
    </StyledModal>
  );
};

export default Form;
