/* eslint-disable @typescript-eslint/no-non-null-assertion */

import firebase from 'firebase/app';

import { Recipe } from 'src/types/recipe';
import { ResponseRecipe, Timestamp } from 'src/types/response';

export const RECIPE_COUNT = 12;

export const isEmpty = (value: unknown) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isNotEmpty = (value: unknown) => {
  return !isEmpty(value);
};

export const isMatch = (left: unknown) => (right: unknown) => {
  if (left === right) {
    return true;
  }
  return false;
};

export const isNotMatch = (left: unknown) => (right: unknown) => {
  return !isMatch(left)(right);
};

export const splitReturnFirst = (value: string) => (keyword: string) => {
  return value.split(keyword)[0];
};

export const changeDateToString = (date: Timestamp) => {
  return date.toDate().toISOString();
};

export const formatRecipe = (recipe: firebase.firestore.QueryDocumentSnapshot<ResponseRecipe>): Recipe => {
  const { created, updated } = recipe.data();
  const {
    userId, title, product, category, newIngredient, ingredients, description, upload, image, show,
  } = recipe.data();
  return {
    id: recipe.id,
    userId,
    title,
    product,
    category,
    newIngredient,
    ingredients,
    description,
    upload,
    image,
    show,
    created: changeDateToString(created!),
    updated: changeDateToString(updated!),
  };
};
