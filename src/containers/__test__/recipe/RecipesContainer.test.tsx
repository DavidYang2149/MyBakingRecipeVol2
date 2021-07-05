import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RecipesContainer from 'src/containers/recipe/RecipesContainer';
import { RootState } from 'src/redux/rootReducer';
import recipes from 'src/services/__mocks__/fixtures/recipes';
import user from 'src/services/__mocks__/fixtures/user';

jest.mock('react-redux');

describe('RecipesContainer', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      recipes,
      user,
    }));
  });

  context('with recipes', () => {
    it('renders container', () => {
      render((
        <MemoryRouter>
          <RecipesContainer />
        </MemoryRouter>
      ));
    });
  });

  context('without recipes', () => {
    it('render loading', () => {
      (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
        recipes: { recipesBook: [], lastRecipe: { recipe: null, isLast: false } },
        user,
      }));

      render((
        <MemoryRouter>
          <RecipesContainer />
        </MemoryRouter>
      ));
    });
  });
});
