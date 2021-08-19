import React from 'react';
import { render } from '@testing-library/react';

import RecipeTitle, { Props } from 'src/components/recipe/RecipeTitle';

describe('RecipeTitle', () => {
  const renderRecipeTitle = ({ title }: Props) => render((
    <RecipeTitle
      title={title}
    />
  ));

  it('render values', () => {
    const { container } = renderRecipeTitle({ title: '마들렌' });

    expect(container).toHaveTextContent('마들렌');
  });
});
