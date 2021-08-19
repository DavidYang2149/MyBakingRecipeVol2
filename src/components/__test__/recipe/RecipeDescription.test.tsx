import React from 'react';
import { render } from '@testing-library/react';

import RecipeDescription, { Props } from 'src/components/recipe/RecipeDescription';

describe('RecipeDescription', () => {
  const onChangeRecipe = jest.fn();

  beforeEach(() => {
    onChangeRecipe.mockClear();
  });

  const renderRecipeDescription = ({ description, onChange }: Props) => render((
    <RecipeDescription
      description={description}
      onChange={onChange}
    />
  ));

  context('with onChange', () => {
    it('render values', () => {
      const description = '베이킹 방법 설명';
      const { container } = renderRecipeDescription({ description, onChange: onChangeRecipe });

      expect(container).toHaveTextContent('베이킹 방법 설명');
    });
  });

  context('without onChange', () => {
    it('render values', () => {
      const description = '베이킹 방법 설명';
      const { container } = renderRecipeDescription({ description });

      expect(container).toHaveTextContent('베이킹 방법 설명');
    });
  });
});
