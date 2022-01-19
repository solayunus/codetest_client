import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";

const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
        <h1>Application</h1>
        <Router>
          <Routes>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} /> 
          </Routes>
        </Router>
    </div>
  );
 
}



export default App;


