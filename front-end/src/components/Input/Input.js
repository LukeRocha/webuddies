import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 12px;
    padding: 12px;
    width: 200px;
`

const Input = ({children, ...props}) =>{
   return <StyledInput {...props}>{children}</StyledInput>
}

export default Input