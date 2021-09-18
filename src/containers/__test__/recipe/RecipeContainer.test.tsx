import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import RecipeContainer from 'src/containers/recipe/RecipeContainer';
import { RootState } from 'src/redux/rootReducer';
import recipes from 'src/services/__mocks__/fixtures/recipes';
import mockState from 'src/services/__mocks__/fixtures/mockState';

describe('RecipeContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  const mockUser = {
    userId: '1',
    displayName: '테스트유저1',
  };

  describe('with recipe', () => {
    it('renders container', () => {
      render((
        <MemoryRouter>
          <RecipeContainer />
        </MemoryRouter>
      ));
    });

    context('without recipe', () => {
      it('renders container', () => {
        const initialRecipe = {
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
        };

        (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
          ...mockState,
          recipe: initialRecipe,
        }));

        render((
          <MemoryRouter>
            <RecipeContainer />
          </MemoryRouter>
        ));
      });
    });

    context('with exist recipe', () => {
      it('click onSubmit', () => {
        (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
          ...mockState,
          user: mockUser,
          recipe: {
            ...recipes.recipesBook[0],
            created: '',
          },
        }));

        const { getByText } = render((
          <MemoryRouter>
            <RecipeContainer />
          </MemoryRouter>
        ));

        fireEvent.click(getByText('수정하기'));

        expect(dispatch).toBeCalledTimes(0);
      });
    });

    context('with confirm true', () => {
      it('click onRemove', () => {
        (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
          ...mockState,
          user: mockUser,
        }));
        global.confirm = () => true;

        const { getByText } = render((
          <MemoryRouter>
            <RecipeContainer />
          </MemoryRouter>
        ));

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(0);
        // TODO: change below
        // expect(dispatch).toBeCalledTimes(1);
      });
    });

    context('with confirm false', () => {
      it('click onRemove', () => {
        (useSelector as jest.Mock).mockImplementationOnce((selector: (arg: RootState) => void) => selector({
          ...mockState,
          user: mockUser,
        }));
        global.confirm = () => false;

        const { getByText } = render((
          <MemoryRouter>
            <RecipeContainer />
          </MemoryRouter>
        ));

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(0);
      });
    });
  });
});
