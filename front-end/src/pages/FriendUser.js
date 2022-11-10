import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context"
import { useParams } from "react-router-dom";

const FriendUser = () =>{
    const { getBuddyData, ...state } = useGlobalContext();
    const params = useParams()
    const {nickname, first_name, last_name} = {...state.accessedUserPage}

    useEffect(() =>{
        getBuddyData(params.nickname)
    },[])

    return(
         <>
            <h1>{nickname}</h1>
            <h2>{first_name}</h2>
            <h3>{last_name}</h3>      
        </>
    )

}

export default FriendUser