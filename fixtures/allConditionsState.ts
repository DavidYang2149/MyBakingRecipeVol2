import recipes from './recipes';

const allConditionsState = {
  recipe: recipes[0],
  recipes: recipes.reduce((map, recipe) => ({
    ...map,
    [recipe.id]: recipe,
  }), {}),
};

export default allConditionsState;
