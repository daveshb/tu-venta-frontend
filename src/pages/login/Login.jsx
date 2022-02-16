import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// import { AccessAlarm, JoinLeftSharp, ThreeDRotation } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './styles.scss';




const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] =useState(0);

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

  useEffect(()=>{
    if(name=="david" && password=="1234"){
      setIsLogin(1);
      localStorage.setItem("isLogin", isLogin);
      navigate("/home")
      
    }else if(logState){

      console.log("No es posible loguear")
      setLogState(false)
      setMessage("Usuario o contraseña incorrecto")
      setTimeout(() => {
          setMessage("")
      }, 2000);
    }
  },  [logState]);
  

  useEffect(()=>{
    if((logState) && (name=="" || password=="")){
      setMessage("Todos los campos son obligatorios")
    }
  },[logState]);

  //Local Storage
  // Obtener desde local storage: 
   //localStorage.getItem("isLogin");


  
  return(
    <>
      {/* <CssBaseline  / > */}
      
      <Container maxWidth="sm">
       <div className='header'>
        <AccountCircleOutlinedIcon className='icon' fontSize="large" />
        <h1>Iniciar sesión</h1>
      </div>
      
        
        <Box className='box' sx={{ bgcolor: '#DFDBE2', height: '40vh' }} >
          <Stack spacing={3}>
           <TextField 
            id="outlined-basic" 
            name="name"
            label="Nombre de usuario" 
            variant="outlined" 
            type="text"
            placeholder="User"
            value={name}
            onChange={handleImputChange}
            autoComplete="off"
            
            />

           <TextField 
            id="outlined-basic" 
            name='password'
            label="Contraseña" 
            variant="outlined"
            type="password"
            placeholder="****"
            value={password}
            onChange={handleImputChange}
            autoComplete="off"
            
            />
           <Button 
            onClick={()=>setLogState(true)}
            
              variant="contained"

            >Ingresar</Button>

            <h2 className='incorrect'>{message}</h2>

          
        </Stack>
        </Box>

      </Container>  
    </>
  )
}

export default Login;
