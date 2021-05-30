export type Recipe = {
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
};

export type Ingredient = {
  id: number;
  weight: number;
  ingredient: string;
};
