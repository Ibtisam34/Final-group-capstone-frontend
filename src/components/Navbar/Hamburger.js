import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MenuAuth } from '../LoginRegister/Auth';

function Hamburger({ isLoggedIn }) {
  const userId = localStorage.getItem('userId');
  const paths = MenuAuth(isLoggedIn, userId);

  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-md-none px-2">
          <Nav.Link href={paths.home}>HOME</Nav.Link>
          <Nav.Link href={paths.appointment}>ADD APPOINTMENT</Nav.Link>
          <Nav.Link href={paths.userappointments}>MY APPOINTMENTS</Nav.Link>
          <Nav.Link href={paths.AddDoctor}>ADD DOCTOR</Nav.Link>
          <Nav.Link href={paths.deleteDoctor}>DELETE DOCTOR</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

Hamburger.propTypes = {
  isLoggedIn: PropTypes.bool,
};
Hamburger.defaultProps = {
  isLoggedIn: false,
};

export default Hamburger;
