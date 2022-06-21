import React from "react";
import NabBar from "../components/navBar";
import Nav2 from "../components/nav2";
import Table from "../components/table";
import IncriptionForm from "../components/inscriptionForm";

const home = (prop) => {
  return (
    <>
      <NabBar />
      {/* <Nav2 form={prop.form}></Nav2> */}
      <Table sx={{ m: 2 }} />
    </>
  );
};

export default home;
