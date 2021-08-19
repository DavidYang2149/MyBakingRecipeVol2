import React from 'react';
import { render } from '@testing-library/react';

import RecipeBasicInfo, { Props } from 'src/components/recipe/RecipeBasicInfo';

describe('RecipeBasicInfo', () => {
  const onChangeRecipe = jest.fn();

  beforeEach(() => {
    onChangeRecipe.mockClear();
  });

  const renderRecipeBasicInfo = ({
    title, category, product, onChange,
  }: Props) => render((
    <RecipeBasicInfo
      title={title}
      category={category}
      product={product}
      onChange={onChange}
    />
  ));

  context('with onChange', () => {
    it('render values', () => {
      const title = '마들렌';
      const category = 1;
      const product = 16;
      const { getByLabelText } = renderRecipeBasicInfo({
        title, category, product, onChange: onChangeRecipe,
      });

      expect(getByLabelText('레시피명')).toHaveValue('마들렌');
      expect(getByLabelText('카테고리')).toHaveValue('1');
      expect(getByLabelText('생산량')).toHaveValue(16);
    });
  });

  context('without onChange', () => {
    it('render values', () => {
      const title = '마들렌';
      const category = 1;
      const product = 16;
      const { getByLabelText } = renderRecipeBasicInfo({
        title, category, product,
      });

      expect(getByLabelText('레시피명')).toHaveValue('마들렌');
      expect(getByLabelText('카테고리')).toHaveValue('1');
      expect(getByLabelText('생산량')).toHaveValue(16);
    });
  });
});
