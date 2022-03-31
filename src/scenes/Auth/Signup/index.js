import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignupContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './index.css'

function App() {
  return (
    <MuiThemeProvider>
      <SignUpContainer />
    </MuiThemeProvider>
  )
};

export default App