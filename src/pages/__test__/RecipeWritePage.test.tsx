import React from 'react';
import { render } from '@testing-library/react';

import RecipeWritePage from '../RecipeWritePage';

describe('ReipceWritePage', () => {
  it('render Page', () => {
    const { container } = render(<RecipeWritePage />);

    expect(container).toHaveTextContent('레시피 작성 페이지');
  });
});
