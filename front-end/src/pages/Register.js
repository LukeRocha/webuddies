import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input/Input'

const FormBackground = styled.section`
margin: -50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #191A1C;
  height: 100vh;
  width: 102vw;
`
const FormModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  margin:10px;
  padding: 20px;
  background-color: #242424;
  border-radius: 4px
`
const HeaderLogo = styled.h1`
  margin: 10px auto;  
  color: #A32FFF;
  font-size: 3em;
`;

const Form = () =>{
  return(
    <>
      <FormBackground>
        <FormModal>
        <HeaderLogo>we<br/>Buddies</HeaderLogo>
        <Input placeholder="Nickname"></Input>
        <Input placeholder="first name"></Input>
        <Input placeholder="last name"></Input>
        <Input type="date" placeholder="Birth"></Input>
        <Input placeholder="City"></Input>
        <Input placeholder="Country"></Input>
        <Input placeholder="e-mail"></Input>
        <Input type="password" placeholder="Choose password"></Input>
        </FormModal>
      </FormBackground>
        </>
    )
}

export default Form