import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Response({ show, setShow }) {
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Congratulations!!!</Alert.Heading>
        <p>New doctor has been successfully created.</p>
      </Alert>
    );
  }
  return <add />;
}

Response.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Response;
