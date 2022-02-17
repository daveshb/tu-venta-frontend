import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../login';
import Home from '../home';
import Facturacion from '../facturacion';
import Reportes from '../reportes';

const RouterContainer = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="facturacion" element={<Facturacion />}/>
        <Route path="reportes" element={<Reportes />}/>
      </Routes>
  );
}

export default RouterContainer;
