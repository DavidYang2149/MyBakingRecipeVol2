import React from 'react';
import { render } from '@testing-library/react';

import Loading from 'src/components/common/Loading';

describe('Loading', () => {
  it('render Loading', () => {
    render(<Loading />);
  });
});
