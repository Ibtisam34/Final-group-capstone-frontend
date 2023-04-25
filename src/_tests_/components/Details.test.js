import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Detail from '../../components/Details';

const doctor = {
  id: 3,
  name: 'Jer',
  specialization: 'nur',
  email: 'jer@gmail.com',
  phone: '1234567890',
  image: 'http://localhost:3001/adddoctor',
  availability: '3',
  created_at: 'Sat, 22 Apr 2023 06:23:14.964111000 UTC +00:00',
  updated_at: 'Sat, 22 Apr 2023 06:23:14.964111000 UTC +00:00',

};
const isLoggedIn = true;

describe('Details page', () => {
  test('it renders text in details page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Detail doctor={doctor} isLoggedIn={isLoggedIn} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Jer')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
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
