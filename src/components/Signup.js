import { useRef } from 'react';
import PropTypes from 'prop-types';

const Signup = ({ setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo) => {
    const url = 'http://localhost:3000/users';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.setItem('token', response.headers.get('Authorization'));
    //   setCurrUser(data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleSubmit = (e) => {
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
    signup(userInfo);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
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
        <a href="/login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </div>
  );
};
Signup.propTypes = {
  setShow: PropTypes.shape([]).isRequired,
};
export default Signup;
