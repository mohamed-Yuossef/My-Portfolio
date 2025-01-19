import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mt-64">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
