import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../login';
import Home from '../home';

const RouterContainer = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
  );
}

export default RouterContainer;
