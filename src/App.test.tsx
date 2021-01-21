import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the home page', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('Oh My Baking Recipe');
  });

  context('when recipe view page', () => {
    it('renders with recipe information', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent('레시피명');
    });
  });
});
