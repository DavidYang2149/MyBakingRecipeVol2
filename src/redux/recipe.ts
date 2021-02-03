import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { Recipe, fetchRecipe } from '../services/recipes';

const initialState: Recipe = {
  id: 0,
  userId: '',
  name: '',
  category: 0,
  product: 0,
  ingredients: [],
  description: '',
};

const { actions, reducer } = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe(state, { payload }: PayloadAction<Recipe>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export function loadRecipe(id: number) {
  return async (dispatch: Dispatch<PayloadAction<Recipe>>) => {
    const recipe = await fetchRecipe(id);

    dispatch(actions.setRecipe(recipe));
  };
}

export const {
  setRecipe,
} = actions;

export default reducer;
