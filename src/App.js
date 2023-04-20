import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Homepage from './components/Homepage/Homepage';
import Detail from './components/Details';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Auth from './components/LoginRegister/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const paths = Auth(isLoggedIn);

  return (
    <main className="App">
      <Routes>
        <Route path="/*" element={<Home isLoggedIn={isLoggedIn} />}>
          <Route exact path={paths.home} element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path={paths.details} element={<Detail />} />
        </Route>
        <Route
          path={paths.AddDoctor}
          element={isLoggedIn ? <AddDoctor /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path={paths.login} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
