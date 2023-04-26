import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Homepage from '../../Homepage/Homepage';

describe('Home page', () => {
  it('renders text in home page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Top-rated Doctors')).toBeInTheDocument();
  });

  it('renders homapage correctly', () => {
    const tree = render(
        <Provider store={store}>
            <Router>
                <Homepage />
            </Router>
        </Provider>);
        expect(tree).toMatchSnapshot();
  })
});
