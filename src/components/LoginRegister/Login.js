import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Logo from '../../assets/images/LOGO-DOCTOR.png';
import { fetchUsers } from '../../redux/users/usersReducer';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.usersReducer);

  const handleLogin = () => {
    users.map((user) => {
      if (user.email === userEmail) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', `${user.id}`);
        setIsLoggedIn('true');
        navigate('/');
      }
      return 'hey';
    });
  };

  return (
    <Container fluid>
      <Container className="login-card col-4 pb-5 bg-white border rounded">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo-img" width="200" height="200" />
        </div>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Button variant="success" type="submit" onClick={() => handleLogin()}>
              Login
            </Button>
          </Form.Group>
        </Form>
        <div>
          <p>
            Don&apos;t have an account?
            {' '}
            <span>
              <button
                type="button"
                onClick={() => { navigate('/register'); }}
                className="access-btn text-primary"
              >
                Register
              </button>
            </span>
          </p>
        </div>
      </Container>
      <Slider />
    </Container>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;
