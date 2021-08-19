import { combineReducers } from '@reduxjs/toolkit';

import userReducer from 'src/redux/user/user';
import recipeReducer from 'src/redux/recipe/recipe';
import recipesReducer from 'src/redux/recipe/recipes';

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
