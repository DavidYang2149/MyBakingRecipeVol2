import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RecipePage from 'src/pages/recipe/RecipePage';
import { RootState } from 'src/redux/rootReducer';
import mockState from 'src/services/__mocks__/fixtures/mockState';

describe('RecipePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  it('return render', () => {
    const { container } = render((
      <MemoryRouter>
        <RecipePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마들렌');
  });

  context('with params', () => {
    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/recipe/1']}>
          <RecipePage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('without params', () => {
    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/recipe/1']}>
          <RecipePage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('마들렌');
    });
  });
});
