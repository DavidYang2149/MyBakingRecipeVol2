import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'src/types/user';
import { postUserLogin, postUserLogout } from 'src/services/user/user';

export type UserState = ReturnType<typeof reducer>;

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

// XXX: When Add getState: () => UserState
export const requestLogin = () => async (dispatch: Dispatch<PayloadAction<{ name: string, value: string }>>) => {
  try {
    const { user } = await postUserLogin();
    const email = user?.email || '';

    dispatch(actions.setUser({ name: 'userId', value: email }));
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const requestLogout = () => async (dispatch: Dispatch<PayloadAction<undefined>>) => {
  await postUserLogout();

  dispatch(actions.clearUser());
};

export const {
  setUser,
  clearUser,
} = actions;

export default reducer;
