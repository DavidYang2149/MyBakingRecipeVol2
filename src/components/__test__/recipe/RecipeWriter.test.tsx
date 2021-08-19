import React from 'react';
import { render } from '@testing-library/react';

import RecipeWriter, { Props } from 'src/components/recipe/RecipeWriter';

describe('RecipeWriter', () => {
  const renderRecipeWriter = ({ user, created }: Props) => render((
    <RecipeWriter
      user={user}
      created={created}
    />
  ));

  it('render values', () => {
    const { container } = renderRecipeWriter({ user: '테스트유저', created: '2021-03-30-10:40:12' });

    expect(container).toHaveTextContent('테스트유저');
    expect(container).toHaveTextContent('2021-03-30');
  });
});
