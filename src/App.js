import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Auth from './components/LoginRegister/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const paths = Auth(isLoggedIn);

  return (
    <main className="App">
      <Routes>
        <Route path={paths.login} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
