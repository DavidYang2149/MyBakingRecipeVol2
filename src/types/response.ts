import firebase from 'firebase/app';

import { Ingredient } from 'src/types/recipe';

export type Timestamp = firebase.firestore.Timestamp;

export type DocumentData = firebase.firestore.DocumentData;

export interface ResponseRecipe {
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
  created?: Timestamp;
  updated?: Timestamp;
}
