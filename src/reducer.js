import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./scenes/Auth/Login/reducer";
import signup from "./scenes/Auth/Signup/reducer";
import home from "./scenes/Home/reducer";

const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    home,
  })
  
export default Reducer