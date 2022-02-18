import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Alert from '@mui/material/Alert';
import './styles.scss';


const Login = () => {
  const navigate = useNavigate();
  const [alert, setAlert] =useState("success");
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
      setAlert("error");
      setLogState(true);
      return;
    }

    if(name === "user" && password === "1234"){
      setIsLogin(true);
    }else{
      setMessage("Usuario o contraseña incorrecto")
      setAlert("error");
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
      <form>
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
           <Button type='submit' onClick={handleClick}variant="contained">Ingresar</Button>
             <Alert 
              severity= {alert} >
              {message}
            </Alert>
          </Stack>

          <h4 className='footer_login'>© 2022 by JLD Todos los derechos reservados </h4>
          </Box>
        </form>
       </Container> 
      </div> 
    </>
  )
}

export default Login;
