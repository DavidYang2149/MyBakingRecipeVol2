import React from 'react';
import { render } from '@testing-library/react';

import NotFound from 'src/components/common/NotFound';

describe('NotFound', () => {
  it('render NotFound', () => {
    render(<NotFound />);
  });
});
