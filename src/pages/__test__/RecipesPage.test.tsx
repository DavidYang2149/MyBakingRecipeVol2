import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import ReipcesPage from '../RecipesPage';

describe('ReipcesPage', () => {
  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <ReipcesPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마들렌');
  });
});
