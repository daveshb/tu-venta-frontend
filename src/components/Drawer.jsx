import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const useStyles = makeStyles({
  drawerHeader: {
    justifyContent: 'space-between'
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PersistentDrawerLeft = ({open, setOpen, userPhotoUrl}) => {
  const navigatee = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className={classes.drawerHeader}>
        <Avatar alt="Remy Sharp" src={userPhotoUrl} /> 
          <IconButton onClick={()=>setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={()=>navigatee("/facturacion")}>
              <ListItemIcon>
              <CurrencyExchangeIcon/>
              <ListItemText primary="Facturación"/>
              </ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={()=>navigatee("/reportes")}>
            <ListItemIcon>
            <DriveFileRenameOutlineIcon />
            <ListItemText primary="Reportes"/>
            </ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={()=>navigatee("/home")}>
              <ListItemIcon>
              <CurrencyExchangeIcon/>
              <ListItemText primary="Home"/>
              </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export default PersistentDrawerLeft;
