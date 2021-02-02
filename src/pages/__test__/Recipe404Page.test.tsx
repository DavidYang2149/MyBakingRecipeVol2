import React from 'react';
import { render } from '@testing-library/react';

import Reipce404Page from '../Recipe404Page';

describe('Reipce404Page', () => {
  it('render 404 Page', () => {
    const { container } = render(<Reipce404Page />);
    
    expect(container).toHaveTextContent('Recipe is Not Found!');
  })
});
