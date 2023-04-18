import { useState } from 'react';
import PropTypes from 'prop-types';

import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import PrivateText from './PrivateText';

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);
  if (currUser) {
    return (
      <div>
        Hello
        {' '}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  }
  return (
    <div>
      { show
        ? <Login setCurrUser={setCurrUser} setShow={setShow} />
        : <Signup setCurrUser={setCurrUser} setShow={setShow} />}
    </div>
  );
};

User.propTypes = {
  setCurrUser: PropTypes.func,
  currUser: PropTypes.shape({}),
};
User.defaultProps = {
  setCurrUser: null,
  currUser: null,
};
export default User;
