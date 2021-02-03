import React from 'react';
import { render } from '@testing-library/react';

import RecipeWriteContainer from '../RecipeWriteContainer';

describe('RecipeWriteContainer', () => {
  it('render Page', () => {
    const { container } = render(<RecipeWriteContainer />);

    expect(container).toHaveTextContent('레시피 작성 페이지');
  });
});
