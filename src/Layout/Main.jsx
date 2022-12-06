import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BlurContext } from "../Context/SetBlur";
import Login from "../pages/Login/Login";
import Header from "../Shared/Header";

const Main = () => {
  const { blur } = useContext(BlurContext);
  return (
    <div className="relative">
      {blur && <Login />}
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
