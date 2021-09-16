import React from 'react';
import { render } from '@testing-library/react';

import IngredientItem, { Props } from 'src/components/recipe/IngredientItem';

describe('IngredientItem', () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });

  const renderIngredientItem = ({
    id, ingredient, weight, onChangeIngredient, onRemoveIngredient, provided,
  }: Props) => render((
    <IngredientItem
      id={id}
      ingredient={ingredient}
      weight={weight}
      onChangeIngredient={onChangeIngredient}
      onRemoveIngredient={onRemoveIngredient}
      provided={provided}
    />
  ));

  const mockIngredient = { id: 1, ingredient: '박력분', weight: 100 };

  context('with provided', () => {
    it('render values', () => {
      const mockProvided = {
        draggableProps: {
          style: {},
          'data-rbd-draggable-context-id': '',
          'data-rbd-draggable-id': '',
        },
        dragHandleProps: {
          'data-rbd-drag-handle-draggable-id': '',
          'data-rbd-drag-handle-context-id': '',
          'aria-describedby': '',
          role: '',
          tabIndex: 0,
          draggable: true,
          onDragStart: jest.fn(),
        },
        innerRef: jest.fn(),
      };

      const { getByDisplayValue } = renderIngredientItem({
        ...mockIngredient,
        onChangeIngredient: onChange,
        onRemoveIngredient: onChange,
        provided: mockProvided,
      });

      expect(getByDisplayValue('박력분')).toHaveValue(mockIngredient.ingredient);
      expect(getByDisplayValue('100')).toHaveValue(mockIngredient.weight);
    });
  });

  context('without provided', () => {
    it('render values', () => {
      const { getByDisplayValue } = renderIngredientItem({
        ...mockIngredient,
        onChangeIngredient: onChange,
        onRemoveIngredient: onChange,
      });

      expect(getByDisplayValue('박력분')).toHaveValue(mockIngredient.ingredient);
      expect(getByDisplayValue('100')).toHaveValue(mockIngredient.weight);
    });
  });
});
