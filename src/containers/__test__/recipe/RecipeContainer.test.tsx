import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import RecipeContainer from 'src/containers/recipe/RecipeContainer';
import { RootState } from 'src/redux/rootReducer';
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
            newIngredient: { id: 0, ingredient: '', weight: 0 },
            description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
            created: '',
            updated: '2021-07-05T14:21:34.000Z',
            show: true,
            upload: '',
            image: '',
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
