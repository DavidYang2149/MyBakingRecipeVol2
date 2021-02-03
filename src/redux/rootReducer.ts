import { combineReducers } from '@reduxjs/toolkit';

import recipeReducer from './recipe';

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
