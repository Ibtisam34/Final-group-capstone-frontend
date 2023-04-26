import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Detail from '../../Details';

const doctor = {
  image: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
  name: 'Dr. John Doe',
  specialization: 'Cardiology',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  availability: 'Mon-Fri 9AM - 5PM',
  id: '1',
};

const isLoggedIn = true;

describe('Detail page', () => {
  test('it renders doctor name in details page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Detail doctor={doctor} isLoggedIn={isLoggedIn} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    window.localStorage.setItem('userId', '1');
    const tree = render(
      <Provider store={store}>
        <Router>
          <Detail doctor={doctor} isLoggedIn={isLoggedIn} />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
