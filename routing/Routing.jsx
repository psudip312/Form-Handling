import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CardDetail from "../componenets/detail/CardDetail";
const Routing = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/detail/:id" element={<CardDetail/>} />

    </Routes>
  );
};

export default Routing;
