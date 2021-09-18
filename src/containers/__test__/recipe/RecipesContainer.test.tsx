import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RecipesContainer from 'src/containers/recipe/RecipesContainer';
import { RootState } from 'src/redux/rootReducer';
import mockState from 'src/services/__mocks__/fixtures/mockTools';

describe('RecipesContainer', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
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
      (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
        ...mockState,
        recipes: { recipesBook: [], lastRecipe: { recipe: null, isLast: false } },
      }));

      renderRecipesContainer();
    });
  });
});
