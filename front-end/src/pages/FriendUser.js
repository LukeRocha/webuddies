import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context"
import { useParams } from "react-router-dom";

const FriendUser =   () =>{
    const { accessFriendPage, ...state } = useGlobalContext();
    const params = useParams()
    console.log(state)    
    accessFriendPage(params)
    console.log(state)
    return(
         <>
            <h2>{'param.nickname page'}</h2>
        </>
    )

}

export default FriendUser