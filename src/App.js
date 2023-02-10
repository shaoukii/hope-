import './App.css'; 
import React  from "react";
import ButtonAppBar from "./bar";
import FullWidthGrid from './body';
import { Box } from '@mui/system';
import BoxSx from './box';

export default  function app() {
  return(
    <>
   
   <div>
   <ButtonAppBar></ButtonAppBar>
   </div>
    <div>
    <FullWidthGrid></FullWidthGrid>
 
    </div>
   
      
    </>
 

  )
  
}