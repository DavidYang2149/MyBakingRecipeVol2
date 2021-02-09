import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from '../../redux/rootReducer';
import allConditionsState from '../../../fixtures/allConditionsState';
import RecipePage from '../RecipePage';

jest.mock('react-redux');

describe('RecipePage', () => {
  const dispatch = jest.fn();

  (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  (useSelector as jest.Mock)
    .mockImplementation((selector: (arg: RootState) => void) => selector(allConditionsState));

  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <RecipePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('레시피 작성 페이지');
  });
});
