import React from 'react';
import { render } from '@testing-library/react';

import RecipeImage, { Props } from 'src/components/recipe/RecipeImage';

describe('RecipeImage', () => {
  const renderRecipeImage = ({ image }: Props) => render((
    <RecipeImage
      image={image}
    />
  ));

  context('with image', () => {
    it('render image', () => {
      const { container } = renderRecipeImage({ image: 'images/cookie.jpeg' });

      expect(container).toHaveTextContent('이미지');
    });
  });

  context('without image', () => {
    it('render default image', () => {
      const { container } = renderRecipeImage({ image: '' });

      expect(container).toHaveTextContent('이미지');
    });
  });
});
