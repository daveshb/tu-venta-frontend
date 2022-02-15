import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return(
    <>
    <div><h1>este es la page de login</h1></div>
    <div><TextField  id="outlined-basic" label="Nombre de usuario" variant="outlined" />
    <Button onClick={()=>navigate("/home")} variant="contained">Contained</Button></div>
    </>
  )
}

export default Login;
