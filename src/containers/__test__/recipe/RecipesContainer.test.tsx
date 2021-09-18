import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RecipesContainer from 'src/containers/recipe/RecipesContainer';
import { RootState } from 'src/redux/rootReducer';
import mockState, { mockUseSelector } from 'src/services/__mocks__/fixtures/mockTools';

describe('RecipesContainer', () => {
  beforeEach(() => {
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
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
      mockUseSelector.mockImplementationOnce((selector: (arg: RootState) => void) => selector({
        ...mockState,
        recipes: { recipesBook: [], lastRecipe: { recipe: null, isLast: false } },
      }));

      renderRecipesContainer();
    });
  });
});
