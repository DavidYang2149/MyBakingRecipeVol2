import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = ({ path }: {path: string}) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  context('with path /', () => {
    it('renders RecipesPage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('with path /notExist', () => {
    it('renders Recipe404Page', () => {
      const { container } = renderApp({ path: '/notExist' });

      expect(container).toHaveTextContent('Recipe is Not Found!');
    });
  });
});
