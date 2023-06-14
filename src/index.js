import React from 'react';
import ReactDOM  from 'react-dom';
import './AppStyle.css';
import { createTheme, ThemeProvider } from "@mui/material";
import MemberProfile from './MemberProfile';
import StaffProfile from './StaffProfile';


// Define your theme
const theme = createTheme();

ReactDOM.render( 
<ThemeProvider theme={theme}>
    <MemberProfile />
    
  </ThemeProvider>, document.getElementById('root'));