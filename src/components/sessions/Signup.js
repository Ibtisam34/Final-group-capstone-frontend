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
<<<<<<< HEAD
        name: data.name,
=======
        username: data.username,
>>>>>>> 2a3a6c9 (Add session and registration in front end)
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
<<<<<<< HEAD
        <input type="text" name="name" placeholder="name" />
=======
        <input type="text" name="username" placeholder="name" />
>>>>>>> 2a3a6c9 (Add session and registration in front end)
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
<<<<<<< HEAD
        <input type="password" name="password_confirmation" placeholder="password_confirmation" />
=======
        <input type="password" name="password" placeholder="password_confirmation" />
>>>>>>> 2a3a6c9 (Add session and registration in front end)
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
