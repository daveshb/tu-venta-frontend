import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import { googleAuthProvider, signInWithPopup, auth, facebookAuthProvider } from '../../network/firebase';
import AlertError from '../../components/AlertError';
import './styles.scss';


const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLoginWithGoogle = async () => {
    try{
      const data = await signInWithPopup(auth, googleAuthProvider);
      console.log("***data", data)
      navigate('/home');
    }catch (err){
      setOpen(true);
    }
  }

  const handleLoginWithFacebook = async () => {
    try{
      await signInWithPopup(auth, facebookAuthProvider);
      navigate('/home');
    }catch (err){
      setOpen(true);
    }
  }

  return(
      <Container maxWidth="sm">
        <div className="login">
	        <h1>Tu venta</h1>
          <div onClick={() => handleLoginWithGoogle()} className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className="btn-text"><b>Iniciar sesión con Google</b></p>
          </div>
          <div onClick={() => handleLoginWithFacebook()} className="facebook-btn">
            <div className="facebook-icon-wrapper">
              <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/440px-2021_Facebook_icon.svg.png"/>
            </div>
            <p className="btn-text"><b>Iniciar sesión con Facebook</b></p>
          </div>
        </div>
        <AlertError open={open} setOpen={setOpen} />
      </Container> 
  )
}

export default Login;
