import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { MenuAuth } from '../LoginRegister/Auth';

function MenuList({ isLoggedIn }) {
  const userId = localStorage.getItem('userId');
  const paths = MenuAuth(isLoggedIn, userId);

  return (
    <ListGroup variant="flush" className="d-none d-md-block">
      <ListGroup.Item action as={NavLink} to={paths.home} className="nav-item">
        HOME
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.AddDoctor} className="nav-item">
        ADD DOCTOR
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.appointment} className="nav-item">
        ADD APPOINTMENT
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.userappointments} className="nav-item">
        MY APPOINTMENTS
      </ListGroup.Item>
    </ListGroup>
  );
}

MenuList.propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
};

export default MenuList;
