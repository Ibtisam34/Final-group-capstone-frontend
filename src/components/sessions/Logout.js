import PropTypes from 'prop-types';
import { logout } from './api';

const Logout = ({ setCurrUser }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    await logout(setCurrUser);
  };
  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};

Logout.propTypes = {
  setCurrUser: PropTypes.func.isRequired,
};
export default Logout;
