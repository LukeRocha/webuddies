import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import {
  EditAccountContainer,
  Title,
  EditForm,
  InputWrap,
  Label,
} from "./styles";
import { useGlobalContext } from "../../context";

const EditAccountData = ({ children, ...props }) => {
  const { editUserAccount, ...state } = useGlobalContext();
  const token = localStorage.getItem("access_token");
  const { first_name, last_name, user_status } = state.userState.userData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditData = (data) => editUserAccount(data, token);

  return (
    <EditAccountContainer>
      <Title>Edit your account</Title>
      <EditForm onSubmit={handleSubmit(handleEditData)}>
        <InputWrap>
          <Label>First name:</Label>
          <Input
            name="first_name"
            {...register("first_name")}
            defaultValue={first_name}
          />
        </InputWrap>

        <InputWrap>
          <Label>Last name:</Label>
          <Input
            name="last_name"
            {...register("last_name")}
            defaultValue={last_name}
          />
        </InputWrap>

        <InputWrap>
          <Label>Bio:</Label>
          <Input
            name="user_status"
            defaultValue={user_status}
            {...register("user_status")}
          />
        </InputWrap>

        <div>
          <Button type="submit" bg={"var(--green-button)"}>
            Submit
          </Button>
        </div>
      </EditForm>
    </EditAccountContainer>
  );
};

export default EditAccountData;
