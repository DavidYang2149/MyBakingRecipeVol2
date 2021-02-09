import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from '../../redux/rootReducer';
import recipes from '../../../fixtures/recipes';
import allConditionsState from '../../../fixtures/allConditionsState';
import RecipeWriteContainer from '../RecipeWriteContainer';

jest.mock('react-redux');
jest.mock('src/services/recipes');

describe('RecipeWriteContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockClear();
  });

  context('with recipe', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          recipe: recipes[0],
        }));

      render(<RecipeWriteContainer />);
    });
  });
});
