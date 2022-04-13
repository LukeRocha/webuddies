import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 12px;
    padding: 12px;
    width: 240px;
    
    color: white;
    background-color: #3A393E;
    border: 1px solid black;
    border-radius: 4px;
`

const Input = ({children, ...props}) =>{
   return <StyledInput {...props}>{children}</StyledInput>
}

export default Input