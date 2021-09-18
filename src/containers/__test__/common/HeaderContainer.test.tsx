import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import HeaderContainer from 'src/containers/common/HeaderContainer';
import { RootState } from 'src/redux/rootReducer';
import mockState from 'src/services/__mocks__/fixtures/mockTools';

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
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
    (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
      ...mockState,
      user: { userId: 'test@email.com', displayName: 'test' },
    }));

    const { getByText } = renderHeaderContainer();

    fireEvent.click(getByText('Logout'));
    expect(dispatch).toBeCalled();
  });
});
