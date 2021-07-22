import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RecipesContainer from 'src/containers/recipe/RecipesContainer';
import { RootState } from 'src/redux/rootReducer';
import recipes from 'src/services/__mocks__/fixtures/recipes';
import user from 'src/services/__mocks__/fixtures/user';

describe('RecipesContainer', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      recipes,
      user,
    }));
  });

  const renderRecipesContainer = () => render((
    <MemoryRouter>
      <RecipesContainer />
    </MemoryRouter>
  ));

  context('with recipes', () => {
    it('renders container', () => {
      renderRecipesContainer();
    });
  });

  context('without recipes', () => {
    it('render loading', () => {
      (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
        recipes: { recipesBook: [], lastRecipe: { recipe: null, isLast: false } },
        user,
      }));

      renderRecipesContainer();
    });
  });
});
