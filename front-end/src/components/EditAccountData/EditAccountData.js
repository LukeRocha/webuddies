import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  EditAccountContainer,
  Title,
  EditForm,
  InputWrap,
  Label,
} from "./styles";
import { useGlobalContext } from "../../context";

const EditAccountData = ({ children, ...props }) => {
  const { editAccount, state } = useGlobalContext();
  const [accountEditData, setAccountEditData] = useState({
    nickname: "",
    first_name: "",
    last_name: "",
    user_status: "",
  });

  return (
    <EditAccountContainer>
      <Title>Account data edit</Title>
      <EditForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputWrap>
          <Label>Nickname:</Label>
          <Input />
        </InputWrap>

        <InputWrap>
          <Label>First name:</Label>
          <Input />
        </InputWrap>

        <InputWrap>
          <Label>Last name:</Label>
          <Input />
        </InputWrap>

        <InputWrap>
          <Label>Bio:</Label>
          <Input />
        </InputWrap>

        <div>
          <Button bg={"var(--green-button)"}>Submit</Button>
        </div>
      </EditForm>
    </EditAccountContainer>
  );
};

export default EditAccountData;
