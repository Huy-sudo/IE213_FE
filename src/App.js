import './App.css';
import LoginForm from './scenes/Auth/Login/LoginForm';
import Signup from './scenes/Auth/Signup/index'
import Home from './scenes/Home/index'
import Admin from './scenes/Admin/Main/index';
import CarTable from './scenes/Admin/CarTable';
import AccessoryTable from './scenes/Admin/AccessoryTable';
function App() {
  return (
    <div className="Appp">
      <CarTable></CarTable>
    </div>
  );
}

export default App;
