import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, waitFor } from '@testing-library/react';

import App from 'src/App';
import { RootState } from 'src/redux/rootReducer';
import user from 'src/services/__mocks__/fixtures/user';
import recipes from 'src/services/__mocks__/fixtures/recipes';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      user,
      recipe: recipes.recipesBook[0],
      recipes,
    }));
  });

  const renderApp = ({ path }: { path: string }) => {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  };

  context('with path /', () => {
    it('renders RecipesPage', async () => {
      const { container } = await waitFor(() => renderApp({ path: '/' }));

      expect(container).toHaveTextContent('My Baking Recipe');
    });
  });

  context('with path /recipe/:id', () => {
    it('renders RecipePage', async () => {
      const { container } = await waitFor(() => renderApp({ path: '/recipe/1' }));

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('with path /notExist', () => {
    it('renders Recipe404Page', async () => {
      const { container } = await waitFor(() => renderApp({ path: '/notExist' }));

      expect(container).toHaveTextContent('해당 페이지를 찾을 수 없습니다');
    });
  });
});
