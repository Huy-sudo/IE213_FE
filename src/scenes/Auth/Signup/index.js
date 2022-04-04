import React from 'react';
import SignUpContainer from "./SignupContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './index.css'
import Layout from "../../../layouts/index"
import AuthenContext from '../../../components/context/AuthenContext';

function App() {
  return (
    <AuthenContext.Consumer>
      {(context) => {
        context.isLoggedIn = false;
        return (
          <Layout>
            <MuiThemeProvider>
              <SignUpContainer />
            </MuiThemeProvider>
          </Layout>
        );
      }}
    </AuthenContext.Consumer>

  )
};

export default App