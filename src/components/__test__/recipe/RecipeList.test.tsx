import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import recipes from 'src/services/__mocks__/fixtures/recipes';
import RecipeList, { Props } from 'src/components/recipe/RecipeList';

describe('RecipeList', () => {
  const renderRecipeList = ({ recipesBook }: Props) => render((
    <MemoryRouter>
      <RecipeList recipesBook={recipesBook} />
    </MemoryRouter>
  ));

  context('with recipesBook', () => {
    it('render values', () => {
      const { container } = renderRecipeList({ recipesBook: recipes.recipesBook });

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('without recipesBook', () => {
    it('render nothing', () => {
      const { container } = renderRecipeList({ recipesBook: [] });

      expect(container).toHaveTextContent('Empty');
    });
  });
});
