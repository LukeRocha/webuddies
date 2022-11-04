import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context"
import { useParams } from "react-router-dom";

const FriendUser =   () =>{
    const { accessFriendPage, ...state } = useGlobalContext();
    const params = useParams()
    accessFriendPage(params.nickname)
    console.log(params)
    
    return(
         <>
            <h2>{'param.nickname page'}</h2>
        </>
    )

}

export default FriendUser