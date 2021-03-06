import React, { useEffect } from "react";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import { FormComponent, InputContainer, Select, Label } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validations/schemas";
import { useGlobalContext } from "../../context";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const Form = () => {
  const { registerSubmitHandler, state } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data, e) => {
    handleSubmit(data);
    registerSubmitHandler(data);
  };

  const ref = React.createRef();

  useEffect(() => {}, [state]);

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nickname</Label>
          <Input ref={ref} {...register("nickname")} />
          <InputError>{errors.nickname?.message}</InputError>
          {state.serverMessages.nickname && (
            <InputError>{state.serverMessages.nickname}</InputError>
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
            <option value="Guaruj??">Guaruj??</option>
            <option value="S??o Vicente">S??o Vicente</option>
            <option value="S??o Paulo">S??o Paulo</option>
            <option value="Praia Grande">praia grande</option>
          </Select>
          <InputError>{errors.city?.message}</InputError>
        </InputContainer>

        <InputContainer>
          <Label>E-mail</Label>
          <Input ref={ref} {...register("mail")} />
          <InputError>{errors.mail?.message}</InputError>
          {state.serverMessages.mail && (
            <InputError>{state.serverMessages.mail}</InputError>
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
            Send
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
