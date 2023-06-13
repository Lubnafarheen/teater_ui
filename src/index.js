import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './AppStyle.css';
import { createTheme, ThemeProvider } from "@mui/material";

// Define your theme
const theme = createTheme();

ReactDOM.render( 
<ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));