import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../../pages/login';
import Home from '../../pages/home';
import Facturacion from '../../pages/facturacion';
import Reportes from '../../pages/reportes';
import Wrapper from "./wrapper";
import Productos from '../../pages/productos';
import Clientes from '../../pages/clientes';

const RouterContainer = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Wrapper><Home /></Wrapper>} />
        <Route path="facturacion" element={<Wrapper><Facturacion /></Wrapper>}/>
        <Route path="reportes" element={<Wrapper><Reportes /></Wrapper>}/>
        <Route path="productos" element={<Wrapper><Productos /></Wrapper>}/>
        <Route path="clientes" element={<Wrapper><Clientes /></Wrapper>}/>
      </Routes>
  );
}

export default RouterContainer;
