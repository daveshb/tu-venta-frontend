import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './styles.scss';


const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] =useState(false);
  const [message, setMessage] =useState("");
  const [logState, setLogState ]= useState(false);
  const[formState, setFormState]= useState ({
    name: '',
    password: '',
  });
  
   const {name, password}=formState;

   const handleImputChange = ({target}) =>{
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  const handleClick = () => {
    if(name === "" || password === ""){
      setMessage("Todos los campos son obligatorios")
      setLogState(true);
      return;
    }

    if(name === "david" && password === "1234"){
      setIsLogin(true);
    }else{
      setMessage("Usuario o contraseña incorrecto")
      setTimeout(() => {
          setMessage("")
      }, 2000);
    }
  }

  useEffect(()=>{
    if (isLogin){
      localStorage.setItem("isLogin", isLogin)
      navigate("/home") 
    }
  },[isLogin]);

  return(
    <>
    <div className='myBody' >      
      <Container maxWidth="sm">
       <div className='header'>
        <AccountCircleOutlinedIcon className='icon' fontSize="large" />
        <h1 className='head'>Iniciar sesión</h1>
      </div>
        <Box className='box' sx={{ bgcolor: '#DFDBE2', height: '50vh' }} >
          <Stack spacing={3}>
           <TextField 
            error={logState ? name === "" : false}
            id="outlined-basic" 
            name="name"
            label="Usuario" 
            variant="outlined" 
            type="text"
            placeholder="User"
            value={name}
            onChange={handleImputChange}
            autoComplete="off"
            helperText={logState && name === "" ? 'Ingrese su Usuario!' : ''}
            />

           <TextField  
            error={logState ? password === "" : false}
            id="outlined-basic" 
            name='password'
            label="Contraseña" 
            variant="outlined"
            type="password"
            placeholder="****"
            value={password}
            onChange={handleImputChange}
            autoComplete="off"
            helperText={logState && password === "" ? 'Ingrese su constraseña!' : ' '}
            />
           <Button onClick={handleClick}variant="contained">Ingresar</Button>
            <h2 className='incorrect'>{message}</h2>
        </Stack>
        </Box>
      </Container> 
      </div> 
    </>
  )
}

export default Login;
