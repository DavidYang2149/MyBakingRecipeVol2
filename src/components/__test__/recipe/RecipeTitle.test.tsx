import React from 'react';
import { render } from '@testing-library/react';

import RecipeTitle from 'src/components/recipe/RecipeTitle';

describe('RecipeTitle', () => {
  const renderRecipeTitle = ({ title }: { title: string }) => render((
    <RecipeTitle
      title={title}
    />
  ));

  it('render values', () => {
    const { container } = renderRecipeTitle({ title: '마들렌' });

    expect(container).toHaveTextContent('마들렌');
  });
});
