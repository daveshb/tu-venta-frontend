import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { PersistentDrawerLeft, CircularProgress  } from '../../components';
import { onAuthStateChanged, signOut, auth } from '../../network/firebase';

const Wrapper = ({children}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState('');
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoguot = () => {
    signOut(auth).then(navigate("/"));
  }

  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){
        setUserPhotoUrl(user.photoURL)
        setIsUserSignedIn(true);
      }else{
        navigate("/")
      }
    });
  }, [navigate])
  
  if(isUserSignedIn){
  return(
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
            onClick={()=>setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tu Venta
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(false)}
              >
                <MenuItem onClick={() => handleLoguot()}>Cerrar Sesión</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {children}
      </Container>
      <PersistentDrawerLeft open={open} setOpen={setOpen} userPhotoUrl={userPhotoUrl} />
    </Box>
  )
}else{
  return <CircularProgress />
}
};

export default Wrapper;


