import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import HelloPage from 'src/pages/common/HelloPage';

describe('HelloPage', () => {
  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <HelloPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Hello Page');
  });
});
