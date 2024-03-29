export interface Recipe {
  id: string;
  userId: string;
  title: string;
  product: number;
  category: number;
  newIngredient?: Ingredient;
  ingredients: Ingredient[];
  description: string;
  upload: string | null;
  image: string | null;
  show?: boolean;
  created?: string;
  updated?: string;
}

export interface Ingredient {
  id: number;
  weight: number;
  ingredient: string;
}

export interface RecipesState {
  recipesBook: Recipe[];
  lastRecipe: { recipe: Recipe | null, isLast: boolean };
}

export const CategoryUnionType = {
  0: '선택',
  1: '쿠키',
  2: '구움과자',
  3: '케이크',
  4: '빵',
  5: '마카롱',
  6: '기타',
};
