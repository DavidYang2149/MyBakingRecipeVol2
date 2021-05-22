import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import HeaderContainer from 'src/containers/common/HeaderContainer';
import { RootState } from 'src/redux/rootReducer';
import user from 'src/services/__mocks__/fixtures/user';
import todo from 'src/services/__mocks__/fixtures/todo';
import todos from 'src/services/__mocks__/fixtures/todos';

jest.mock('react-redux');

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      user,
      todo,
      todos,
    }));
  });

  it('renders container', () => {
    render((
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    ));
  });

  it('click sign in', () => {
    const { getByText } = render((
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('Sign in (Google)'));

    expect(dispatch).toBeCalled();
  });

  it('click Logout', () => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      user: { userId: 'test@email.com', displayName: 'test' },
      todo,
      todos,
    }));

    const { getByText } = render((
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('Logout'));

    expect(dispatch).toBeCalled();
  });
});