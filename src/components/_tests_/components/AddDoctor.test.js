import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import AddDoctor from '../../AddDoctor/AddDoctor';

describe('Add a Doctor', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><AddDoctor /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
