import { useDispatch, useSelector } from 'react-redux';

import user from 'src/services/__mocks__/fixtures/user';
import recipes from 'src/services/__mocks__/fixtures/recipes';

const mockState = {
  user,
  recipe: recipes.recipesBook[0],
  recipes,
};

export const mockUseDispatch = useDispatch as jest.Mock;

export const mockUseSelector = useSelector as jest.Mock;

export default mockState;
