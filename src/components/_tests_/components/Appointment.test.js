import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Appointment from '../../Appointments/Appointments';

describe('Appointment booking page renders correctly', () => {
  it('render the appointment page correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(
      <Provider store={store}>
        <Router>
          <Appointment />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
