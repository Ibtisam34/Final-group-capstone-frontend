import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Register from '../components/LoginRegister/Register';

describe('Register to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Register /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  it('should have email input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router><Register /></Router>
      </Provider>,
    );
    const emailInput = getByPlaceholderText('Email address');
    expect(emailInput).toBeInTheDocument();
  });

  it('should have password input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router><Register /></Router>
      </Provider>,
    );
    const passwordInput = getByPlaceholderText('Full name');
    expect(passwordInput).toBeInTheDocument();
  });

  it('should have register button', () => {
    const { getByText } = render(<Provider store={store}><Router><Register /></Router></Provider>);
    const registerButton = getByText('Register');
    expect(registerButton).toBeInTheDocument();
  });

  it('should have login button', () => {
    const { getByText } = render(<Provider store={store}><Router><Register /></Router></Provider>);
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });
});
