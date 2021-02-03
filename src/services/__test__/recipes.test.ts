import sampleRecipes from '../../../fixtures/recipes';
import { fetchRecipe, fetchRecipes } from '../recipes';

describe('Recipes', () => {
  describe('fetchRecipe', () => {
    it('returns recipe', async () => {
      const recipe = await fetchRecipe(1);

      expect(recipe).toEqual(sampleRecipes[0]);
    });
  });

  describe('fetchRecipes', () => {
    it('renders recipes', async () => {
      const recipes = await fetchRecipes();

      expect(recipes[0]).toEqual(recipes[0]);
    });
  });
});
