import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Recipe } from '../../services/recipes';
import reducer, {
  setRecipe,
  changeRecipe,
  loadRecipe,
} from '../recipe';

jest.mock('src/services/recipes');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('recipe reducer', () => {
  const initialState: Recipe = {
    id: 0,
    userId: '',
    title: '',
    category: 0,
    product: 0,
    ingredients: [],
    description: '',
  };

  context('when state is undefined', () => {
    it('return initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRecipe', () => {
    it('set recipe', () => {
      const recipe: Recipe = {
        id: 1,
        userId: '1',
        title: '마들렌',
        category: 1,
        product: 16,
        ingredients: [
          { id: 1, ingredient: '설탕', weight: 150 },
          { id: 2, ingredient: '버터', weight: 150 },
          { id: 3, ingredient: '전란', weight: 100 },
          { id: 4, ingredient: '박력분', weight: 150 },
        ],
        description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
      };

      const state = reducer(initialState, setRecipe(recipe));

      expect(state).toEqual(recipe);
    });
  });

  it('change recipe', () => {
    const recipe: Recipe = {
      id: 1,
      userId: '1',
      title: '마들렌',
      category: 1,
      product: 16,
      ingredients: [
        { id: 1, ingredient: '설탕', weight: 150 },
        { id: 2, ingredient: '버터', weight: 150 },
        { id: 3, ingredient: '전란', weight: 100 },
        { id: 4, ingredient: '박력분', weight: 150 },
      ],
      description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
    };

    const resultRecipe: Recipe = {
      id: 1,
      userId: '1',
      title: '맛있는마들렌',
      category: 1,
      product: 16,
      ingredients: [
        { id: 1, ingredient: '설탕', weight: 150 },
        { id: 2, ingredient: '버터', weight: 150 },
        { id: 3, ingredient: '전란', weight: 100 },
        { id: 4, ingredient: '박력분', weight: 150 },
      ],
      description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
    };

    const state = reducer(recipe, changeRecipe({ name: 'title', value: '맛있는마들렌' }));

    expect(state).toEqual(resultRecipe);
  });
});

describe('recipe actions', () => {
  describe('loadRecipe', () => {
    it('runs setRecipe', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadRecipe(1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRecipe({}));
    });
  });
});
