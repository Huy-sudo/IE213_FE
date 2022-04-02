import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Error404 from "./scenes/Auth/Error404";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import { verify } from "./scenes/Auth/Login/action";
import Cookies from "js-cookie";
import router from "./routes";
import Home from "./scenes/Home"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { styles: "" };
  }

  // componentDidMount = () => {
  //   const token = Cookies.get("web_token");
  //   if (!token) this.props.history.push("/signup");
  //   else this.props.verify();
  // };
  
  render() {
    let key = 1;
    // if (window.location.pathname.includes("/admin")) {
    //   this.setState({styles: "admin-footer"});
    // } else {
    //   this.setState({styles: "App"});
    // }
     
    return (
      <div className="App">
        <Router history={this.props.history} location={this.props.history.location}>
          {/* <Layout {...this.props}> */}
          <Routes>
            {router.map((d) => {
              key += 1;
              return (
                <Route
                  exact
                  path={d.path}
                  key={key}
                  element = {<d.component/>}
                  // render={(d)=> (d.component) }
                />
              );
            })}
            <Route/>
            <Route path="*" element={ <Error404/> }/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.login.user,
  }),
  (dispatch) => ({
    verify: () => {
      dispatch(verify());
    },
  })
)(App);
