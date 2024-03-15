import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div >
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
