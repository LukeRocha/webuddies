import { React, useState } from "react";
import styled, { css } from "styled-components";
import Input from "../Input/Input";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputContainer = styled.div`
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

const FormComponent = () => {
  const registerSchema = yup.object().shape({
    nickname: yup.string().required("this field is required"),
    first_name: yup.string().required("this field is required"),
    last_name: yup.string().required("this field is required"),
    birth: yup.date().required("this field is required"),
    city: yup.string().required(),
    mail: yup.string().email().required("this field is required"),
    phone: yup
      .number()
      .positive()
      .integer()
      .min(11)
      .required("this field is required"),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("Choose a password between 8 and 16 characters"),
    rePassword: yup.string().required("Password must match"),
  });

  const [userInputs, setUserInputs] = useState({
    nickname: "",
    first_name: "",
    last_name: "",
    birth: "",
    city: "",
    mail: "",
    phone: "",
    password: "",
    rePassword: "",
  });
  return (
    <Formik
      initialValues={userInputs}
      validationSchema={registerSchema}
      validateOnSubmit={false}
      validateOnBlur={false}
      onSubmit={(userInputs, { validate }, e) => {
        e.preventDefault();
        validate(userInputs);
      }}
    >
      {({ errors }) => (
        <Form>
          <InputContainer>
            <Label htmlFor="nick">Nickname</Label>
            <Field
              as={Input}
              id="nick"
              name="nick"
              type="text"
              value={userInputs.nickname}
              onChange={(e) =>
                setUserInputs({ ...userInputs, nickname: e.target.value })
              }
            />
            {errors.nickname && <InputError>{errors.nickname}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="first_name">First name</Label>
            <Field
              as={Input}
              id="first_name"
              name="first_name"
              type="text"
              value={userInputs.first_name}
              onChange={(e) =>
                setUserInputs({ ...userInputs, first_name: e.target.value })
              }
            />
            {errors.first_name && <InputError>{errors.first_name}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="last_name">Last name</Label>
            <Field
              as={Input}
              id="last_name"
              name="last_name"
              type="text"
              value={userInputs.last_name}
              onChange={(e) =>
                setUserInputs({ ...userInputs, last_name: e.target.value })
              }
            />
            {errors.last_name && <InputError>{errors.last_name}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="birth ">Birth</Label>
            <Field
              as={Input}
              id="birth "
              name="birth"
              type="date"
              value={userInputs.birth}
              onChange={(e) =>
                setUserInputs({ ...userInputs, birth: e.target.value })
              }
            />
            {errors.birth && <InputError>{errors.birth}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="mail">E-mail</Label>
            <Field
              as={Input}
              id="mail"
              name="mail"
              type="text"
              value={userInputs.mail}
              onChange={(e) =>
                setUserInputs({ ...userInputs, mail: e.target.value })
              }
            />
            {errors.mail && <InputError>{errors.mail}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Field
              as={Input}
              id="phone"
              name="phone"
              type="select"
              value={userInputs.phone}
              onChange={(e) =>
                setUserInputs({ ...userInputs, phone: e.target.value })
              }
              options={"santos"}
            />
            {errors.phone && <InputError>{errors.phone}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="city">City</Label>
            <Field
              id="city"
              name="city"
              as={Select}
              value={userInputs.city}
              onChange={(e) =>
                setUserInputs({ ...userInputs, city: e.target.value })
              }
            >
              <option value="Guarujá">Guarujá</option>
              <option value="Santos">Santos</option>
              <option value="São Vicente">São Vicente</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Praia Grande">Praia Grande</option>
            </Field>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              value={userInputs.password}
              onChange={(e) =>
                setUserInputs({ ...userInputs, password: e.target.value })
              }
            />
            {errors.password && <InputError>{errors.password}</InputError>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="rePassword">confirm password</Label>
            <Field
              as={Input}
              id="rePassword"
              name="rePassword"
              type="password"
              value={userInputs.rePassword}
              onChange={(e) =>
                setUserInputs({ ...userInputs, rePassword: e.target.value })
              }
            />
            {errors.rePassword && <InputError>{errors.rePassword}</InputError>}
          </InputContainer>
          <InputContainer>
            <Button
              onClick={() => console.log(userInputs)}
              bg={"green"}
              type="submit"
            >
              Submit
            </Button>
          </InputContainer>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
