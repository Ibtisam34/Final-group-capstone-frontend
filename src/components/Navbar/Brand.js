import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../../assets/images/LOGO-DOCTOR.png';

function Brand() {
  return (
    <Navbar.Brand
      href="/"
      className="d-flex flex-md-column flex-lg-row align-items-md-center align-items-lg-end"
    >
      <img
        alt="Logo"
        src={Logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      />
      {' '}
      <span className="logo-text d-flex align-items-end text-dark pe-2">Clinic Group</span>
    </Navbar.Brand>
  );
}

export default Brand;