import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import NotFoundPage from 'src/pages/common/NotFoundPage';

describe('NotFoundPage', () => {
  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Not Found');
  });
});
