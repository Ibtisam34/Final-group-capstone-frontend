import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOut,
  loggedin,
} from '../redux/reducer/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedin);

  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <header className="col-md-2 header">
      <img src="https://img.freepik.com/premium-vector/heart-medical-shape-doctor-logo-design_23987-717.jpg?w=2000" alt="Logo" height="120" />
      <nav className="nav-bar">
        <ul className="links d-flex flex-column sidebar-menu mt-3">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/appointment">APOINTMENTS</Link></li>
          <li><Link to="/reservation">RESERVATIONS</Link></li>
          {
            isLoggedIn ? <button type="button" className="btn btn-danger mt-5" onClick={handleLogout}>Logout</button>
              : <Link className="btn btn-primary mt-5" to="/login">Login</Link>
          }

          <li />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
