import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { RootState } from 'src/redux/rootReducer';
import { fetchRecipes } from 'src/services/recipe/recipes';
import { Recipe, RecipesState } from 'src/types/recipe';
import { ResponseRecipe } from 'src/types/response';
import {
  RECIPE_COUNT,
  isEmpty,
  formatRecipe,
} from 'src/utils/tools';

export type RecipesReducer = ReturnType<typeof reducer>;

const initialState: RecipesState = {
  recipesBook: [],
  lastRecipe: { recipe: null, isLast: false },
};

const { actions, reducer } = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, { payload }: PayloadAction<Recipe[]>) {
      return {
        ...state,
        recipesBook: [...payload],
      };
    },
    setLastRecipe(state, { payload: { name, value } }: PayloadAction<{ name: string, value: Recipe | boolean }>) {
      return {
        ...state,
        lastRecipe: { ...state.lastRecipe, [name]: value },
      };
    },
    addRecipes(state, { payload }: PayloadAction<Recipe[]>) {
      return {
        ...state,
        recipesBook: [...state.recipesBook, ...payload],
      };
    },
  },
});

export const loadRecipes = () => async (
  dispatch:
  Dispatch<PayloadAction<Recipe[] |
  { name: string, value: boolean | Recipe } |
  undefined>>,
  getState: () => RootState,
) => {
  const { recipes: { lastRecipe: { recipe, isLast } } } = getState();

  if (isLast) { return; }

  const response = await fetchRecipes(recipe);

  if (isEmpty(response)) {
    dispatch(actions.setRecipes([]));
    return;
  }

  const recipes = response.map((doc) => {
    return formatRecipe(doc as firebase.firestore.QueryDocumentSnapshot<ResponseRecipe>);
  });
  const isLastRecipe = recipes.length < RECIPE_COUNT;

  dispatch(actions.addRecipes(recipes));
  dispatch(actions.setLastRecipe({ name: 'recipe', value: recipes.splice(-1)[0] }));
  dispatch(actions.setLastRecipe({ name: 'isLast', value: isLastRecipe }));
};

export const {
  setRecipes,
  setLastRecipe,
  addRecipes,
} = actions;

export default reducer;
