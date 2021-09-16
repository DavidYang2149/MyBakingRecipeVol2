/**
* @jest-environment node
*/
// XXX: loadRecipes에 node로 설정 필요 - Firestore 오류

import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  clearRecipe,
  loadRecipe,
  RecipeReducer, setRecipe,
} from 'src/redux/recipe/recipe';
import { RootState } from 'src/redux/rootReducer';
import { fetchRecipe } from 'src/services/recipe/recipes';
import mockState from 'src/services/__mocks__/fixtures/mockState';
import recipes, { responseRecipes } from 'src/services/__mocks__/fixtures/recipes';
import { Recipe as RecipeState } from 'src/types/recipe';

const middlewares = [thunk];
const mockStore = configureStore<RecipeReducer | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

// XXX: connect services user Mock
jest.mock('src/services/recipe/recipes');
jest.mock('src/services/user/user');
jest.mock('src/utils/storage');

describe('recipe reducer', () => {
  const initialState: RecipeState = {
    id: '',
    userId: '',
    title: '',
    category: 0,
    product: 0,
    ingredients: [],
    newIngredient: { id: 0, ingredient: '', weight: 0 },
    description: '',
    upload: null,
    image: null,
    show: false,
    created: '',
    updated: '',
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRecipe', () => {
    it('return set recipe', () => {
      const state = reducer(initialState, setRecipe(recipes.recipesBook[0]));
      const result = {
        id: '1',
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
        newIngredient: { id: 5, ingredient: '', weight: 0 },
        description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
        created: '2021-07-02T17:10:56.000Z',
        updated: '2021-07-05T14:21:34.000Z',
        show: true,
        upload: '',
        image: '',
      };

      expect(state).toEqual(result);
    });
  });

  describe('clearRecipe', () => {
    it('return clear recipe', () => {
      const state = reducer(recipes.recipesBook[0], clearRecipe());

      expect(state).toEqual(initialState);
    });
  });
});

describe('recipe functions', () => {
  describe('loadRecipe', () => {
    context('wihout response', () => {
      it('return setRecipe initialState', async () => {
        const store = mockStore({
          ...mockState,
          recipes: {
            recipesBook: [],
            lastRecipe: { recipe: null, isLast: true },
          },
        });
        (fetchRecipe as jest.Mock).mockImplementationOnce(() => {
          return { exists: false };
        });

        await store.dispatch(loadRecipe('1'));
      });
    });

    context('with response', () => {
      it('return setRecipe response', async () => {
        const store = mockStore({
          ...mockState,
        });
        (fetchRecipe as jest.Mock).mockImplementationOnce(() => {
          return {
            exists: true,
            data: () => responseRecipes[0],
            id: responseRecipes[0].id,
          };
        });

        await store.dispatch(loadRecipe('1'));
        const actions = store.getActions();
        expect(actions[0]).toEqual(setRecipe(recipes.recipesBook[0]));
      });
    });
  });
});
