import React from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
  width: 58vw;
	padding: 5px;
		
	border-radius: 4px;
	border: none;
	color: white;
	background-color: ${({bg}) => (bg? bg:'white')}
`

const Button = ({children, bg, ...props}) =>{
    return(
      <>
      	<StyledButton bg={bg} {...props}>{children}</StyledButton>
      </>
    )
}

export default Button
