import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import EditAccountData from "../components/EditAccountData/EditAccountData";
import { useGlobalContext } from "../context";

const EditAccount = () => {
  const { ...state } = useGlobalContext();
  console.log("edit", state);
  return (
    <>
      <Header />
      <EditAccountData />
      <BottomNav />
    </>
  );
};

export default EditAccount;
