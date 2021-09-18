/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from 'src/services/firebase/firebase';
import { fetchRecipe, fetchRecipes } from 'src/services/recipe/recipes';
import recipes, { responseRecipes } from 'src/services/__mocks__/fixtures/recipes';

jest.mock('src/services/firebase/firebase');

describe('fetchRecipe', () => {
  it('return recipe', async () => {
    const get = jest.fn(() => responseRecipes[0]);
    const doc = jest.fn(() => ({ get }));
    jest.spyOn(db, 'collection').mockReturnValue((({ doc } as unknown) as any));

    const result = await fetchRecipe({ id: 'test' });

    expect(result).toEqual(responseRecipes[0]);
  });
});

describe('fetchRecipes', () => {
  context('without lastRecipe', () => {
    it('return recipes', async () => {
      const docs = responseRecipes;
      const get = jest.fn(() => ({ docs }));
      const limit = jest.fn(() => ({ get }));
      const orderBy = jest.fn(() => ({ limit }));
      jest.spyOn(db, 'collection').mockReturnValue((({ orderBy } as unknown) as any));

      const result = await fetchRecipes(null);

      expect(result).toEqual(responseRecipes);
    });
  });

  context('with lastRecipe', () => {
    context('with created', () => {
      it('return recipes', async () => {
        const docs = responseRecipes;
        const get = jest.fn(() => ({ docs }));
        const limit = jest.fn(() => ({ get }));
        const startAfter = jest.fn(() => ({ limit }));
        const orderBy = jest.fn(() => ({ startAfter }));
        jest.spyOn(db, 'collection').mockReturnValue((({ orderBy } as unknown) as any));

        const result = await fetchRecipes(recipes.recipesBook[0]);

        expect(result).toEqual(responseRecipes);
      });
    });

    context('without created', () => {
      it('return recipes', async () => {
        const docs = responseRecipes;
        const get = jest.fn(() => ({ docs }));
        const limit = jest.fn(() => ({ get }));
        const startAfter = jest.fn(() => ({ limit }));
        const orderBy = jest.fn(() => ({ startAfter }));
        jest.spyOn(db, 'collection').mockReturnValue((({ orderBy } as unknown) as any));

        const mockRecipe = {
          ...recipes.recipesBook[0],
          created: '',
        };

        const result = await fetchRecipes(mockRecipe);

        expect(result).toEqual(responseRecipes);
      });
    });
  });
});
