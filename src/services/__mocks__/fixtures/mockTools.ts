import user from 'src/services/__mocks__/fixtures/user';
import recipes from 'src/services/__mocks__/fixtures/recipes';

const mockState = {
  user,
  recipe: recipes.recipesBook[0],
  recipes,
};

export default mockState;
