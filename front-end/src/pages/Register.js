import React from 'react'

import styled from 'styled-components'
import Input from '../components/Input/Input'

const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`
const FormHeader = styled.div`
`

const HeaderLogo = styled.h2`
  margin: 0 auto;
  padding: 0;
  align-self: center;
  position: relative;
  color: black;
`;


const Form = () =>{

    return(
        <>
        <FormContainer>
        <HeaderLogo>webuddies</HeaderLogo>
        <Input placeholder="input something"></Input>
        </FormContainer>
        </>
    )
}

export default Form