/**
* @jest-environment node
*/
// XXX: loadRecipes에 node로 설정 필요 - Firestore 오류

import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  addRecipes,
  loadRecipes,
  RecipesReducer, setLastRecipe, setRecipes,
} from 'src/redux/recipe/recipes';
import { RootState } from 'src/redux/rootReducer';
import { fetchRecipes } from 'src/services/recipe/recipes';
import recipes, { responseRecipes } from 'src/services/__mocks__/fixtures/recipes';
import user from 'src/services/__mocks__/fixtures/user';
import { RecipesState } from 'src/types/recipe';

const middlewares = [thunk];
const mockStore = configureStore<RecipesReducer | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

// XXX: connect services user Mock
jest.mock('src/services/recipe/recipes');
jest.mock('src/services/user/user');
jest.mock('src/utils/storage');

describe('recipes reducer', () => {
  const initialState: RecipesState = {
    recipesBook: [],
    lastRecipe: { recipe: null, isLast: false },
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRecipes', () => {
    it('return set recipes', () => {
      const state = reducer(initialState, setRecipes(recipes.recipesBook));

      expect(state).toEqual({
        recipesBook: recipes.recipesBook,
        lastRecipe: { recipe: null, isLast: false },
      });
    });
  });

  describe('setLastRecipe', () => {
    it('return set last recipe', () => {
      const state = reducer(initialState, setLastRecipe({ name: 'isLast', value: true }));

      expect(state).toEqual({
        recipesBook: [],
        lastRecipe: { recipe: null, isLast: true },
      });
    });
  });

  describe('addRecipes', () => {
    it('return add recipes', () => {
      const theMockRecipe = {
        id: '2',
        userId: '2',
        title: '구겔호프',
        category: 2,
        product: 1,
        ingredients: [
          { id: 1, ingredient: '설탕', weight: 100 },
          { id: 2, ingredient: '버터', weight: 100 },
          { id: 3, ingredient: '전란', weight: 100 },
          { id: 4, ingredient: '박력분', weight: 100 },
        ],
        newIngredient: { id: 0, ingredient: '', weight: 0 },
        description: '구겔호프',
        created: '2020-05-02-17:10:56',
        updated: '2020-05-05-14:21:34',
        show: true,
        upload: '',
        image: '',
      };
      const theMockState = {
        recipesBook: [theMockRecipe],
        lastRecipe: { recipe: null, isLast: false },
      };

      const state = reducer(theMockState, addRecipes(recipes.recipesBook));

      expect(state).toEqual({
        recipesBook: [theMockRecipe, ...recipes.recipesBook],
        lastRecipe: { recipe: null, isLast: false },
      });
    });
  });
});

describe('recipes functions', () => {
  describe('loadRecipes', () => {
    context('isLast true', () => {
      it('return (nothing)', async () => {
        const store = mockStore({
          user,
          recipe: recipes.recipesBook[0],
          recipes: {
            recipesBook: [],
            lastRecipe: { recipe: null, isLast: true },
          },
        });

        await store.dispatch(loadRecipes());
      });
    });

    context('isLast false', () => {
      context('fetchRecipes return null', () => {
        it('run setRecipes', async () => {
          const store = mockStore({
            user,
            recipe: recipes.recipesBook[0],
            recipes,
          });
          (fetchRecipes as jest.Mock).mockImplementation(() => {
            return null;
          });

          await store.dispatch(loadRecipes());
          const actions = store.getActions();
          expect(actions[0]).toEqual(setRecipes([]));
        });
      });

      context('fetchRecipes return values', () => {
        it('run setRecipes', async () => {
          const store = mockStore({
            user,
            recipe: recipes.recipesBook[0],
            recipes,
          });
          (fetchRecipes as jest.Mock).mockImplementation(() => {
            return responseRecipes.map((recipe) => {
              return {
                data: () => recipe,
                id: recipe.id,
              };
            });
          });

          await store.dispatch(loadRecipes());
          const actions = store.getActions();
          expect(actions[0]).toEqual(addRecipes([]));
          expect(actions[1]).toEqual(setLastRecipe({ name: 'recipe', value: recipes.recipesBook.splice(-1)[0] }));
          expect(actions[2]).toEqual(setLastRecipe({ name: 'isLast', value: true }));
        });
      });
    });
  });
});
