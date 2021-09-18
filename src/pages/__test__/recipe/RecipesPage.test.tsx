/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ReipcesPage from 'src/pages/recipe/RecipesPage';
import { RootState } from 'src/redux/rootReducer';
import mockState from 'src/services/__mocks__/fixtures/mockTools';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('ReipcesPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <ReipcesPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마들렌');
  });

  context('with isIntersecting', () => {
    it('render Page', () => {
      const { container } = render((
        <MemoryRouter>
          <ReipcesPage />
        </MemoryRouter>
      ));

      // FIXED ME: Lint 문제 해결하기
      const calls = window.IntersectionObserver.mock.calls;
      const [onChange] = calls[calls.length - 1];

      onChange([
        {
          target: container.firstChild,
          isIntersecting: true,
          intersectionRatio: 0.5,
        },
      ]);

      expect(dispatch).toBeCalled();
    });
  });

  context('without isIntersecting', () => {
    it('render Page', () => {
      const { container } = render((
        <MemoryRouter>
          <ReipcesPage />
        </MemoryRouter>
      ));

      // FIXED ME: Lint 문제 해결하기
      const calls = window.IntersectionObserver.mock.calls;
      const [onChange] = calls[calls.length - 1];

      onChange([
        {
          target: container.firstChild,
          isIntersecting: false,
          intersectionRatio: 0.5,
        },
      ]);

      expect(dispatch).not.toBeCalled();
    });
  });
});
