import React from 'react';
import { render } from '@testing-library/react';

import RecipePage from '../RecipePage';

describe('RecipePage', () => {
  it('render Page', () => {
    const { container } = render(<RecipePage />);

    expect(container).toHaveTextContent('레시피 작성 페이지');
  });
});
