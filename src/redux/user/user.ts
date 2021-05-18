import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'src/types/user';

const initialState: User = {
  userId: '',
  displayName: '',
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload: { name, value } }: PayloadAction<{ name: string, value: string }>) {
      return {
        ...state,
        [name]: value,
      };
    },
    clearUser(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {
  setUser,
  clearUser,
} = actions;

export default reducer;
