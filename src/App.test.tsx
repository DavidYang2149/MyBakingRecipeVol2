import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';

import App from 'src/App';
import { RootState } from 'src/redux/rootReducer';
import mockState, {
  mockUseDispatch,
  mockUseSelector,
  setMockIntersectionObserver,
} from 'src/services/__mocks__/fixtures/mockTools';

setMockIntersectionObserver();

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  const renderApp = ({ path }: { path: string }) => {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  };
  const waitForWithPath = (path: string) => waitFor(() => renderApp({ path }));

  context('with path default', () => {
    it('renders DefaultPage', async () => {
      const { container } = await waitForWithPath('/');

      expect(container).toHaveTextContent('My Baking Recipe');
    });
  });

  context('with path /recipe/:id', () => {
    it('renders RecipePage', async () => {
      const { container } = await waitForWithPath('/recipe/1');

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('with path /notExist', () => {
    it('renders Recipe404Page', async () => {
      const { container } = await waitForWithPath('/notExist');

      expect(container).toHaveTextContent('해당 페이지를 찾을 수 없습니다');
    });
  });
});
