import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RecipeItem, { Props } from 'src/components/recipe/RecipeItem';

describe('RecipeItem', () => {
  const renderBlockItem = ({ recipe }: Props) => render((
    <MemoryRouter>
      <RecipeItem
        recipe={recipe}
      />
    </MemoryRouter>
  ));

  context('with recipe', () => {
    it('render RecipeItem', () => {
      const mockRecipe = {
        id: 'a1',
        image: '',
        title: '초코칩쿠키',
        description: '초코칩 쿠키 만들기',
        created: '2021-07-02-18:10:12',
        userId: 'test@email.com',
        product: 10,
        category: 1,
        ingredients: [],
        upload: '',
      };
      const { container } = renderBlockItem({ recipe: mockRecipe });

      expect(container).toHaveTextContent('초코칩쿠키');
      expect(container).toHaveTextContent('test');
      expect(container).not.toHaveTextContent('test@email.com');

      expect(container).toHaveTextContent('초코칩 쿠키 만들기');
    });
  });

  context('with recipe', () => {
    it('render RecipeItem cut down description', () => {
      const char30 = '초코칩 쿠키 만들기를 제작해봅시다. 첫 번째 초코칩 쿠';
      const mockDescription = `${char30}키를 잘게 다진다. 두 번째 설탕을 넣는다.`;
      const mockRecipe = {
        id: 'a1',
        image: '',
        title: '초코칩쿠키',
        description: mockDescription,
        created: '2021-07-02-18:10:12',
        userId: 'test@email.com',
        product: 10,
        category: 1,
        ingredients: [],
        upload: '',
      };
      const { container } = renderBlockItem({ recipe: mockRecipe });

      expect(container).toHaveTextContent('초코칩쿠키');
      expect(container).toHaveTextContent('test');
      expect(container).not.toHaveTextContent('test@email.com');

      expect(container).toHaveTextContent(`${char30}...`);
    });
  });
});
