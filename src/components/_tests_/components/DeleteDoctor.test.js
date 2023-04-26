import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Removedoctor from '../../../components/AddDoctor/DeleteDoctor';

describe('Delete Doctor', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(<Provider store={store}><Router><Removedoctor /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});