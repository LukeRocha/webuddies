import React, { useState } from "react";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FormButton, { FormComponent, InputContainer, Select, Label, ButtonWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validations/schemas";
import { useGlobalContext } from "../../context";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import StyledButton from "../Button/styles";

const Form = () => {
  const { registerSubmitHandler, serverMessages } = useGlobalContext();
  const [isModalOn, setIsModalOn] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const navigateHome = () => {
    navigate("/");
  };

  const onSubmit = async (data) => {
    await registerSubmitHandler(data);
    setIsModalOn(true);
  };

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nickname</Label>
          <Input {...register("nickname")} />
          <InputError>{errors.nickname?.message}</InputError>
          {serverMessages.nickname && <InputError>{serverMessages.nickname}</InputError>}
        </InputContainer>
        <InputContainer>
          <Label>First name</Label>
          <Input {...register("first_name")} />
          <InputError>{errors.first_name?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label>Last name</Label>
          <Input {...register("last_name")} />
          <InputError>{errors.last_name?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label>Birthdate</Label>
          <Input type="date" {...register("birth")} />
          <InputError>{errors.birth?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label>City</Label>
          <Select placeholder="select city" {...register("city")}>
            <option value="" label=""></option>
            <option value="Santos">Santos</option>
            <option value="Guarujá">Guarujá</option>
            <option value="São Vicente">São Vicente</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Praia Grande">Praia Grande</option>
          </Select>
          <InputError>{errors.city?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label>E-mail</Label>
          <Input {...register("mail")} />
          <InputError>{errors.mail?.message}</InputError>
          {serverMessages.mail && <InputError>{serverMessages.mail}</InputError>}
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          <InputError>{errors.password?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Label>Confirm password</Label>
          <Input type="password" {...register("confirm_password")} />
          <InputError>{errors.confirm_password?.message}</InputError>
        </InputContainer>
        <ButtonWrapper>
          <FormButton bg={"var(--green-button)"} type="submit">Create account</FormButton>
          <Link to="/">
            <FormButton className="button-Link" bg={"var(--red-button)"} type="button">Cancel</FormButton>
          </Link>
        </ButtonWrapper>
        {isModalOn && (
          <Modal>
            <h3>Your account has been created!</h3>
            <StyledButton>
              <Button bg={"var(--green-button)"} onClick={navigateHome}>Ok</Button>
            </StyledButton>
          </Modal>
        )}
      </FormComponent>
    </>
  );
};

export default Form;
