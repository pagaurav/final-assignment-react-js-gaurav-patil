import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Form/SignIn/SignIn';
import Welcome from './Components/Welcome/Welcome';
import SignUp from './Components/Form/SignUp/SignUp';
import ForgotPassword from './Components/Form/Forgot Password/ForgotPassword';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
