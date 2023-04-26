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
import Appointment from './components/Appointments/Appointments';
import UserAppointments from './components/Appointments/UserAppointments';
import Removedoctor from './components/AddDoctor/DeleteDoctor';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const paths = Auth(isLoggedIn);

  return (
    <main className="App">
      <Routes>
        <Route path="/*" element={<Home isLoggedIn={isLoggedIn} />}>
          <Route exact path={paths.home} element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path={paths.details} element={<Detail />} />
          <Route
            path={paths.userappointments}
            element={<UserAppointments isLoggedIn={isLoggedIn} />}
          />
        </Route>
        <Route
          path={paths.AddDoctor}
          element={isLoggedIn ? <AddDoctor /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path={paths.deleteDoctor}
          element={isLoggedIn ? <Removedoctor /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path={paths.appointment}
          element={isLoggedIn ? <Appointment /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path={paths.login} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </main>
  );
};

export default App;
