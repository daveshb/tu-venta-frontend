import React from 'react';
import './styles.scss';
import { Typography } from '@mui/material';
import PersistentDrawerLeft from '../../components/drawer';





const Home = () => {
  return(
    <body class='bodyHome'>
    <div>
     
     <Typography  align='center'>
      <h1 class='oneH'> Bienvenido a tu venta</h1>
     </Typography>
      </div>
      <PersistentDrawerLeft/>
    </body>
    
  )
}

export default Home;
