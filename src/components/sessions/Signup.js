import { useRef } from 'react';
import PropTypes from 'prop-types';
import { signup } from './api';

const Signup = ({ setShow }) => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    await signup(userInfo);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Name:
        {' '}
        <input type="text" name="username" placeholder="name" />
        <br />
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password_confirmation" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </div>
  );
};
Signup.propTypes = {
  setShow: PropTypes.func.isRequired,
};
export default Signup;
