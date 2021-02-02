import React from 'react';
import { render } from '@testing-library/react';

import ReipcesPage from '../RecipesPage';

describe('ReipcesPage', () => {
  it('render Page', () => {
    const { container } = render(<ReipcesPage />);
    
    expect(container).toHaveTextContent('마들렌');
  })
});
