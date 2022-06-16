import React from "react";
import NabBar from "../components/navBar";
import Nav2 from "../components/nav2";
import Table from "../components/table";
import IncriptionForm from "../components/inscriptionForm";

const home = () => {
  return (
    <>
      {/* <NabBar /> */}
      <Nav2>
        <Table />
      </Nav2>
      {/* <IncriptionForm /> */}
    </>
  );
};

export default home;
