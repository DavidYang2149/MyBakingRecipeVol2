import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { fetchRecipe } from 'src/services/recipe/recipes';
import { Recipe, Recipe as RecipeState } from 'src/types/recipe';
import { ResponseRecipe } from 'src/types/response';
import { formatRecipe } from 'src/utils/tools';

export type RecipeReducer = ReturnType<typeof reducer>;

const initialState: RecipeState = {
  id: '',
  userId: '',
  title: '',
  category: 0,
  product: 0,
  ingredients: [],
  newIngredient: { id: 0, ingredient: '', weight: 0 },
  description: '',
  upload: null,
  image: null,
  show: false,
  created: '',
  updated: '',
};

const { actions, reducer } = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe(state, { payload }: PayloadAction<Recipe>) {
      return {
        ...state,
        ...payload,
        newIngredient: { id: payload.ingredients.length + 1, ingredient: '', weight: 0 },
      };
    },
    clearRecipe(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const loadRecipe = (id: string) => async (
  dispatch: Dispatch<PayloadAction<Recipe>>,
) => {
  const response = await fetchRecipe({ id });

  if (!response.exists) {
    dispatch(actions.setRecipe(initialState));
    return;
  }

  dispatch(actions.setRecipe(formatRecipe(response as firebase.firestore.QueryDocumentSnapshot<ResponseRecipe>)));
};

export const {
  setRecipe,
  clearRecipe,
} = actions;

export default reducer;
