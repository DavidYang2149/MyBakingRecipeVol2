import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from 'src/redux/todo/todo';
import todosReducer from 'src/redux/todo/todos';
import userReducer from 'src/redux/user/user';

const rootReducer = combineReducers({
  todo: todoReducer,
  todos: todosReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
