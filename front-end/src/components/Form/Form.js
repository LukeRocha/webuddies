import React from "react";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import { FormComponent, InputContainer, Select, Label } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validations/schemas";
import { useGlobalContext } from "../../context";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const { registerSubmitHandler, serverMessages } = useGlobalContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const navigateHome = () =>{
    navigate("/");
  }

  const onSubmit = async (data, e) => {
    await handleSubmit(data);
    await registerSubmitHandler(data);
    navigateHome()
  }

  const ref = React.createRef();


  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nickname</Label>
          <Input ref={ref} {...register("nickname")} />
          <InputError>{errors.nickname?.message}</InputError>
          {serverMessages.nickname && (
            <InputError>{serverMessages.nickname}</InputError>
          )}
        </InputContainer>
        <InputContainer>
          <Label>First name</Label>
          <Input ref={ref} {...register("first_name")} />
          <InputError>{errors.first_name?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>Last name</Label>
          <Input ref={ref} {...register("last_name")} />
          <InputError>{errors.last_name?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>Birthdate</Label>
          <Input ref={ref} type="date" {...register("birth")} />
          <InputError>{errors.birth?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>City</Label>
          <Select ref={ref} placeholder="select city" {...register("city")}>
            <option label=""></option>
            <option value="Santos">Santos</option>
            <option value="Guarujá">Guarujá</option>
            <option value="São Vicente">São Vicente</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Praia Grande">praia grande</option>
          </Select>
          <InputError>{errors.city?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>E-mail</Label>
          <Input ref={ref} {...register("mail")} />
          <InputError>{errors.mail?.message}</InputError>
          {serverMessages.mail && (
            <InputError>{serverMessages.mail}</InputError>
          )}
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <Input ref={ref} type="password" {...register("password")} />
          <InputError>{errors.password?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>Confirm password</Label>
          <Input ref={ref} type="password" {...register("confirm_password")} />
          <InputError>{errors.confirm_password?.message}</InputError>
        </InputContainer>
        <InputContainer>
          <Button bg={"var(--green-button)"} type="submit">
            Create account
          </Button>
          <Link to="/">
            <Button
              className="button-Link"
              bg={"var(--red-button)"}
              type="button"
            >
              cancel
            </Button>
          </Link>
        </InputContainer>
      </FormComponent>
    </>
  );
};

export default Form;
