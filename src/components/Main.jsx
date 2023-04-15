import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className="container mx-auto p-5  bg-slate-100">
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Main;
