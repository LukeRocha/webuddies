import React from "react";
import styled from "styled-components";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Formik, Form, Field } from "formik";

const ModalContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;

  padding: 10px;
  background-color: #242424;
  border-radius: 4px;
`;

const Form = () => {
  return (
    <ModalContainer>
      <Modal>
        <Formik
          initialValues={{
            nickname: "",
            first_name: "",
            last_name: "",
            birth: "",
            city: "",
            country: "",
            mail: "",
            phone: "",
            password: "",
          }}
        >
          <Form></Form>
        </Formik>
      </Modal>
    </ModalContainer>
  );
};

export default { Form };
