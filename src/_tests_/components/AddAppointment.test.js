import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Appointment from '../../components/Appointments/Appointments';

describe('Add a Appointment', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Appointment /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
