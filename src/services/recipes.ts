import recipes from '../../fixtures/recipes';

export type Recipe = {
  id: number;
  userId: string;
  title: string;
  category: number;
  product: number;
  ingredients: Ingredient[];
  description: string;
};

export type Ingredient = {
  id: number;
  title: string;
  weight: number;
};

export async function fetchRecipe(id: number): Promise<Recipe> {
  return Promise.resolve(recipes[id - 1]);
}

export async function fetchRecipes(): Promise<Recipe[]> {
  return Promise.resolve(recipes);
}
