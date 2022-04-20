import { React, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import InputError from "../InputError/InputError";
import Button from "../Button/Button";
import { Formik, Form, Field } from "formik";
import { registerSchema } from "../../Validations/registerValidation";
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

const useFormik = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;

    setValues({
      ...values,
      [fieldName]: value,
    });
    console.log("mexi no selola", fieldName);
  };

  return {
    values,
    handleChange,
  };
};

const validate = (values) => {
  const errors = {};

  if (!registerSchema.validateAt(values.nickname)) {
    errors.nickname = "input nickname";
    console.log(errors);
  } else {
    console.log("nao");
  }

  return errors;
};
const FormComponent = () => {
  const [errors, setErrors] = useState();
  const formik = useFormik({
    initialValues: {
      nickname: "",
      first_name: "",
      last_name: "",
      birth: "",
      city: "",
      mail: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <Formik
      initialValues={formik.values}
      validationSchema={registerSchema}
      validateOnSubmit={false}
      validateOnBlur={false}
      onSubmit={(e) => {
        e.preventDefault();
        setErrors(validate(formik.values));
      }}
    >
      {({ errors }) => (
        <Form>
          <InputContainer>
            <Label htmlFor="nickname">Nickname</Label>
            <Field
              as={Input}
              id="nickname"
              name="nickname"
              type="text"
              value={formik.values.nickname}
              onChange={formik.handleChange}
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
              value={formik.values.first_name}
              onChange={formik.handleChange}
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
              value={formik.values.last_name}
              onChange={formik.handleChange}
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
              value={formik.values.birth}
              onChange={formik.handleChange}
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
              value={formik.values.mail}
              onChange={formik.handleChange}
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
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {errors.phone && <InputError>{errors.phone}</InputError>}
          </InputContainer>

          <InputContainer>
            <Label htmlFor="city">City</Label>
            <Field
              id="city"
              as={Select}
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
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
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {errors.password && <InputError>{errors.password}</InputError>}
          </InputContainer>

          <InputContainer>
            <Label htmlFor="confirm_password">confirm password</Label>
            <Field
              as={Input}
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            {errors.confirm_password && (
              <InputError>{errors.confirm_password}</InputError>
            )}
          </InputContainer>

          <InputContainer>
            <Button
              onClick={() => console.log(formik.values)}
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
