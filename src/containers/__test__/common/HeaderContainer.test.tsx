import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import HeaderContainer from 'src/containers/common/HeaderContainer';
import { RootState } from 'src/redux/rootReducer';
import user from 'src/services/__mocks__/fixtures/user';
import recipes from 'src/services/__mocks__/fixtures/recipes';

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      recipes,
      recipe: recipes.recipesBook[0],
      user,
    }));
  });

  const renderHeaderContainer = () => render((
    <MemoryRouter>
      <HeaderContainer />
    </MemoryRouter>
  ));

  it('renders container', () => {
    renderHeaderContainer();
  });

  it('click sign in', () => {
    const { getByText } = renderHeaderContainer();

    fireEvent.click(getByText('Sign in (Google)'));
    expect(dispatch).toBeCalled();
  });

  it('click Logout', () => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      recipes,
      recipe: recipes.recipesBook[0],
      user: { userId: 'test@email.com', displayName: 'test' },
    }));

    const { getByText } = renderHeaderContainer();

    fireEvent.click(getByText('Logout'));
    expect(dispatch).toBeCalled();
  });
});
