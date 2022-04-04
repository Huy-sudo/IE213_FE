import { all } from 'redux-saga/effects'
import loginSaga from "./scenes/Auth/Login/saga";
import signupSaga from "./scenes/Auth/Signup/saga";
import homeSaga from "./scenes/Home/saga";

const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
    ])
  }
  
  export default Saga