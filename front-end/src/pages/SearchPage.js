import React, { useEffect, useState } from "react";
import SearchUsersComponent from "../components/SearchModal/SearchModal";
import Header from "../components/Header/Header";
import styled from "styled-components";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <Header />
      <SearchUsersComponent></SearchUsersComponent>
    </SearchPageContainer>
  );
};

export default SearchPage;
