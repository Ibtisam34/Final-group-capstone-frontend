import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import UserAppointments from '../../Appointments/Appointments';

describe('UserAppointment', () => {
  it('renders user appointment page correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <UserAppointments />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  
});
