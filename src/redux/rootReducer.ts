import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from 'src/redux/todo/todo';
import todosReducer from 'src/redux/todo/todos';

const rootReducer = combineReducers({
  todo: todoReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
