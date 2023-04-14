import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Alert from '../components/Alert';
import userToken from '../redux/reducer/user/userToken';
import { signUp } from '../redux/reducer/user/userSlice';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Too Short!')
      .max(100, 'Too Long')
      .matches(
        /^(?=.{4,50}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
        'Username should have at least 4 characters and should not contain numbers or special characters/punctuations!',
      ),
    email: Yup.string()
      .email('Invalid Email!'),
    password: Yup.string()
      .matches(
        /^[a-zA-Z0-9!@#$%^&* ]{6,20}$/,
        'Password must contain at least 6 characters!',
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password not match!'),
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isTokenSet = userToken();

  const [values, setValues] = useState(initialValues);
  const [signupStatus, setSignupStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const signUphandler = async (user) => {
    const register = await dispatch(signUp(user));
    if (register.payload.status === '00') {
      localStorage.setItem('authUser', JSON.stringify(register.payload.data));
      setSignupStatus('success');
      setValues((prevState) => ({
        ...prevState,
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }));
      navigate('/');
    } else {
      setSignupStatus('error');
    }
  };

  useEffect(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet]);

  document.title = 'Luxury Cars | Register';
  return (
    <>
      <Alert />
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Register
              </div>
              <div className="card-body">
                {signupStatus === 'success' && (
                  <div className="alert alert-success" role="alert">
                    User successfully registered!
                  </div>
                )}
                {signupStatus === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    An error occured!
                  </div>
                )}
                <Formik
                  initialValues={initialValues}
                  validationSchema={SignUpSchema}
                  onSubmit={() => signUphandler({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                  })}
                >
                  {({
                    errors, touched,
                  }) => (
                    <Form>
                      <div className="form-group mb-3">
                        <label htmlFor="nameInput" className="form-label" style={{ width: '100%' }}>
                          Name
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="nameInput"
                            autoComplete="name"
                            value={values.name}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.name && touched.name && <div className="form-error">{errors.name}</div>}
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="emailInput" className="form-label" style={{ width: '100%' }}>
                          Email address
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="emailInput"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.email && touched.email && <div className="form-error">{errors.email}</div>}
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="passwordInput" className="form-label" style={{ width: '100%' }}>
                          Password
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="passwordInput"
                            autoComplete="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.password && touched.password && <div className="form-error">{errors.password}</div>}
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="confirmPasswordInput" className="form-label" style={{ width: '100%' }}>
                          Confirm password
                          <input
                            type="password"
                            name="passwordConfirmation"
                            className="form-control"
                            id="confirmPasswordInput"
                            autoComplete="password"
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.confirmPassword && touched.confirmPassword && (
                          <div className="form-error">{errors.confirmPassword}</div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="mt-3">
                  Already have an account?
                  {' '}
                  <a href="/login">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
