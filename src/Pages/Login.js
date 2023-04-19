import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { signIn, getTextc } from '../redux/reducer/user/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ currUser, setCurrUser }) => {
  const [user, setUser] = useState({});
  // const [dataMem, setDataMember] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const isLoggedIn = useSelector(authenticatedUser);

  const handleChange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    setUser({ ...user, [input]: value });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const authLogin = await dispatch(signIn(user));
    setCurrUser(await getTextc());
    if (authLogin.payload.status === 'successful') {
      localStorage.setItem('authUser', JSON.stringify(authLogin.payload.user));
      navigate('/');
    }
  };
  useEffect(() => {
    getTextc();
  });
  console.log('girma', currUser);

  useEffect(() => {
    if (currUser) navigate('/');
  }, [currUser]);

  document.title = 'Famous Doctors | Login';

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <div className="form-group mb-3">

                  <label htmlFor="email" style={{ width: '100%' }}>
                    Email address
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={handleChange}
                    />

                  </label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label" style={{ width: '100%' }}>
                    Password
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="passwordInput"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignIn}>Login </button>
              </form>
              <div className="mt-3">
                Don&apos;t have an account?
                {' '}
                <a href="/register">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  currUser: PropTypes.bool.isRequired,
  setCurrUser: PropTypes.func.isRequired,
};
export default Login;
