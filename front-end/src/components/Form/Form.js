import React, { useState } from "react";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validations/registerValidation";
import { useGlobalContext } from "../../context";
const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: 0 auto;
  padding: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 6px auto;
  align-self: center;
`;

const Label = styled.label`
  color: white;
  margin: 2px 12px;
  text-align: left;
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
  const registerSubmitHandler = useGlobalContext();
  const initialValues = {
    nickname: "",
    first_name: "",
    last_name: "",
    birth: "",
    city: "",
    mail: "",
    phone: "",
    password: "",
    confirm_password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    handleSubmit(data);
    registerSubmitHandler(data);
  };
  console.log(onSubmit);
  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Nickname</Label>
        <input {...register("nickname")} />
        <InputError>{errors.nickname?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>First name</Label>
        <input {...register("first_name")} />
        <InputError>{errors.first_name?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>Last name</Label>
        <input {...register("last_name")} />
        <InputError>{errors.last_name?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>Birthdate</Label>
        <input type="date" {...register("birth")} />
        <InputError>{errors.birth?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>City</Label>
        <select placeholder="select city" {...register("city")}>
          <option value="Santos">Santos</option>
          <option value="Guarujá">Guarujá</option>
          <option value="São Vicente">São Vicente</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Praia Grande">praia grande</option>
        </select>
        <InputError>{errors.city?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>E-mail</Label>
        <input {...register("mail")} />
        <InputError>{errors.mail?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>Phone number</Label>
        <input type="number" {...register("phone")} />
        <InputError>{errors.phone?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <input type="password" {...register("password")} />
        <InputError>{errors.password?.message}</InputError>
      </InputContainer>

      <InputContainer>
        <Label>Confirm password</Label>
        <input type="password" {...register("confirm_password")} />
        <InputError>{errors.confirm_password?.message}</InputError>
      </InputContainer>
      <InputContainer>
        <Button bg={"#6FB794"} type="submit">
          Send
        </Button>
      </InputContainer>
    </FormComponent>
  );
};

export default Form;
