import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AllDoneTask';
import AllDoneTask from './AllDoneTask';
import { Provider } from 'react-redux';
import setupStore from '../../../store/store';
const store = setupStore()

describe('AllDoneTaskList', () => {
  
  it('List render', () => {
    render(
      <Provider store={store}>
        <AllDoneTask />
      </Provider>);
    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it('listitem render without data', () => {
    render(
      <Provider store={store}>
        <AllDoneTask />
      </Provider>);
     expect(screen.queryByRole('listitem')).toBeNull()
  })
})
