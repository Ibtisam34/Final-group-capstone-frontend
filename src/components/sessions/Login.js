import { useRef } from 'react';
import PropTypes from 'prop-types';
import { login } from './api';

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    await login(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet,
        <a href="#signup" onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
};
Login.propTypes = {
  setCurrUser: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default Login;
