import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AppRouter = ({ currUser, setCurrUser }) => (
  <Routes>
    <Route path="/login" element={<Login currUser={currUser} setCurrUser={setCurrUser} />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

AppRouter.propTypes = {
  currUser: PropTypes.bool.isRequired,
  setCurrUser: PropTypes.func.isRequired,
};
export default AppRouter;
