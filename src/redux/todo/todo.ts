import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Todo } from 'src/types/todo';

const initialState: Todo = { id: 0, content: '' };

const { actions, reducer } = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, { payload }: PayloadAction<Todo>) {
      return {
        ...state,
        ...payload,
      };
    },
    changeTodo(state, { payload: { name, value } }: PayloadAction<{ name: string, value: string }>) {
      return {
        ...state,
        [name]: value,
      };
    },
    clearTodo(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {
  setTodo,
  changeTodo,
  clearTodo,
} = actions;

export default reducer;
