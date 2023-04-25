import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Login from '../components/LoginRegister/Login'


describe('Login to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Login /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  
  it('should have email input field', () => {
    const { getByPlaceholderText } = render(<Provider store={store}><Router><Login /></Router></Provider>);
    const emailInput = getByPlaceholderText('Email address');
    expect(emailInput).toBeInTheDocument();
  })


});