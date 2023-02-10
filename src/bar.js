import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Img from "./ss.jpg"
import './App.css'; 
export default function ButtonAppBar() {
  return (
    
      <AppBar color="inherit" position="fixed">
        <Toolbar>
       
          <Typography variant="h5"  sx={{ mr:15 }}  component="div" sx={{ flexGrow: 1 ,paddingTop: 2 , textAlign:'centre', height:"100%",width:'150%' }}>
          <img src={Img}  alt="img"   className="responsive-image" />
          </Typography>
          <Button variant="h1"  color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr:15 }}
          >
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    
  );
}