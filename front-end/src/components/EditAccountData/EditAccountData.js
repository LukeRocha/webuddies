import React, { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  EditAccountContainer,
  Title,
  EditForm,
  InputWrap,
  Label,
} from "./styles";
import { useGlobalContext } from "../../context";
import { getLoggedData } from "../../operations/operations";

const EditAccountData = ({ children, ...props }) => {
  const { editUserAccount, ...state } = useGlobalContext();
  const [isModalOn, setIsModalOn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const { nickname, first_name, last_name, user_status } =
    state.userState.userData;
  console.log(state.userState);

  // My state is gettin empty as I access this component from another page or component that isn't the profile page
  // any alteration here will need to be fixed, cause I believe that this isn't the best way to get data from my backend

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditData = async (data) => {
    await editUserAccount(data, token);
    setIsModalOn(true);
  };

  const navigateHome = () => {
    navigate("/profile");
  };
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
      {isModalOn && (
        <Modal>
          <h3>Account data has updated!</h3>
          <Button bg={"var(--green-button)"} onClick={() => navigateHome()}>
            Ok
          </Button>
        </Modal>
      )}
    </EditAccountContainer>
  );
};

export default EditAccountData;
