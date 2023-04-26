import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider from './SliderHomepage';

function Homepage({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const keys = ['isLoggedIn', 'userId'];

    keys.forEach((key) => localStorage.removeItem(key));

    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <div className="homepage-header-container">
        <h1 id="h1">Top-rated Doctors</h1>
        <p>Find and book an appointment</p>
      </div>

      <Slider isLoggedIn={isLoggedIn} />

      {isLoggedIn && (
        <Button
          variant="secondary"
          className="logout-btn"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      )}
    </div>
  );
}

Homepage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Homepage;
