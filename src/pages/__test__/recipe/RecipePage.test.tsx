import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RecipePage from 'src/pages/recipe/RecipePage';
import { RootState } from 'src/redux/rootReducer';
import recipes from 'src/services/__mocks__/fixtures/recipes';
import user from 'src/services/__mocks__/fixtures/user';

describe('RecipePage', () => {
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
