import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { User } from 'src/types/user';
import reducer, {
  setUser,
  clearUser,
  requestLogin,
  requestLogout,
  UserState,
} from 'src/redux/user/user';
import { postUserLogin, postUserLogout } from 'src/services/user/user';

const middlewares = [thunk];
const mockStore = configureStore<UserState, ThunkDispatch<UserState, void, AnyAction>>(middlewares);

// XXX: connect services user Mock
jest.mock('src/services/user/user');

describe('user reducer', () => {
  const initialState: User = {
    userId: '',
    displayName: '',
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setUser', () => {
    it('setUser', () => {
      const state = reducer(initialState, setUser({ name: 'userId', value: 'test@test.com' }));

      expect(state).toEqual({
        userId: 'test@test.com',
        displayName: '',
      });
    });
  });

  describe('clearUser', () => {
    it('clearUser', () => {
      const state = reducer({
        userId: 'test@test.com',
        displayName: 'tester',
      }, clearUser());

      expect(state).toEqual(initialState);
    });
  });
});

describe('user actions', () => {
  describe('requestLogin', () => {
    context('without Error', () => {
      context('with user', () => {
        it('runs setUser', async () => {
          const store = mockStore({
            userId: '',
            displayName: '',
          });

          (postUserLogin as jest.Mock).mockImplementation(() => ({
            user: {
              email: 'test@test.com',
            },
          }));

          await store.dispatch(requestLogin());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setUser({
            name: 'userId',
            value: 'test@test.com',
          }));
        });
      });

      context('without user', () => {
        it('runs setUser', async () => {
          const store = mockStore({
            userId: '',
            displayName: '',
          });

          (postUserLogin as jest.Mock).mockImplementation(() => ({
            user: {},
          }));

          await store.dispatch(requestLogin());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setUser({
            name: 'userId',
            value: '',
          }));
        });
      });
    });

    context('with Error', () => {
      it('requestLogin action failure to return error', async () => {
        const store = mockStore({
          userId: '',
          displayName: '',
        });

        (postUserLogin as jest.Mock).mockImplementation(() => {
          throw new Error('requestLogin error');
        });

        try {
          await store.dispatch(requestLogin());
        } catch (error) {
          expect(error).toEqual(new Error('requestLogin error'));
        }
      });
    });
  });

  describe('requestLogout', () => {
    it('runs clearUser', async () => {
      const store = mockStore({
        userId: '',
        displayName: '',
      });

      (postUserLogout as jest.Mock).mockImplementation(() => ({}));

      await store.dispatch(requestLogout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearUser());
    });
  });
});
