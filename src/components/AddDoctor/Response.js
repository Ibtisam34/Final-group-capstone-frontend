import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Response = ({ show, setShow }) => {
  if (show) {
    return (
      <>
        <div className="doctor-arrow">
          <Link to="/">
            <FaArrowLeft style={{ color: '#41464b', fontSize: '2rem', margin: '5px' }} />
          </Link>
        </div>
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Congratulations!!!</Alert.Heading>
          <p>New doctor has been successfully created.</p>
        </Alert>
      </>
    );
  }
  return <add />;
};

Response.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Response;
