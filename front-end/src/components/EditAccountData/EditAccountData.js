import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  const { editAccount, getUserDataByToken, ...state } = useGlobalContext();
  const { register, handleSubmit } = useForm();

  return (
    <EditAccountContainer>
      <Title>Account data edit</Title>
      <EditForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          <Button type="submit" onClick={() => {}} bg={"var(--green-button)"}>
            Submit
          </Button>
        </div>
      </EditForm>
    </EditAccountContainer>
  );
};

export default EditAccountData;
