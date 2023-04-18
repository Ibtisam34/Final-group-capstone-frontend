import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PrivateText = ({ currUser }) => {
  const [message, setMessage] = useState(null);
  const getText = async () => {
    try {
      const response = await fetch('http://localhost:3000/member-data', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      });
      if (!response.ok) throw Error;
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.log('error', error);
      setMessage(null);
    }
  };
  useEffect(() => {
    if (currUser) getText();
  }, [currUser]);
  return (
    <div>{message}</div>
  );
};

PrivateText.propTypes = {
  currUser: PropTypes.shape([]).isRequired,
};

export default PrivateText;
