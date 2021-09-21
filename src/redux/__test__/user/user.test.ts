import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { User } from 'src/types/user';
import reducer, {
  setUser,
  clearUser,
  requestLogin,
  requestLogout,
  requestSessionCheck,
  UserReducer,
} from 'src/redux/user/user';
import { RootState } from 'src/redux/rootReducer';
import {
  postUserLogin,
  postUserLogout,
  getCurrentUser,
} from 'src/services/user/user';
import mockState from 'src/services/__mocks__/fixtures/mockTools';
import { loadItem } from 'src/utils/storage';

const middlewares = [thunk];
const mockStore = configureStore<UserReducer | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

// XXX: connect services user Mock
jest.mock('src/services/user/user');
jest.mock('src/utils/storage');

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
            ...mockState,
          });

          (postUserLogin as jest.Mock).mockImplementationOnce(() => ({
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
            ...mockState,
          });

          (postUserLogin as jest.Mock).mockImplementationOnce(() => ({
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
          ...mockState,
        });

        (postUserLogin as jest.Mock).mockImplementationOnce(() => {
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
        ...mockState,
      });

      (postUserLogout as jest.Mock).mockImplementationOnce(() => ({}));

      await store.dispatch(requestLogout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearUser());
    });
  });

  describe('requestSessionCheck', () => {
    context('with currentUser', () => {
      it('return email saveItem & setUser', (done) => {
        const store = mockStore({
          ...mockState,
        });

        (getCurrentUser as jest.Mock).mockImplementationOnce(() => ({
          email: 'test@email.com',
        }));

        store.dispatch(requestSessionCheck());

        setTimeout(() => {
          const actions = store.getActions();

          expect(actions[0]).toEqual(setUser({
            name: 'userId',
            value: 'test@email.com',
          }));
          done();
        }, 500);
      });
    });

    context('without currentUser', () => {
      it('return empty setUser', (done) => {
        const store = mockStore({
          ...mockState,
        });

        (getCurrentUser as jest.Mock).mockImplementationOnce(() => ({
          user: {},
        }));
        (loadItem as jest.Mock).mockImplementationOnce(() => '');

        store.dispatch(requestSessionCheck());

        setTimeout(() => {
          const actions = store.getActions();

          expect(actions[0]).toEqual(clearUser());
          done();
        }, 500);
      });
    });
  });
});
