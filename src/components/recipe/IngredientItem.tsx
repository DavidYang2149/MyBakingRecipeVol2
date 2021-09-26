/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

import './IngredientItem.scss';

export interface Props {
  id: number;
  ingredient: string;
  weight: number;
  onChangeIngredient?: () => void;
  onRemoveIngredient?: () => void;
  provided?: DraggableProvided;
}

const IngredientItem = ({
  id, ingredient, weight, onChangeIngredient, onRemoveIngredient, provided,
}: Props) => {
  if (!provided) {
    return (
      <li>
        <input
          type="text"
          id={`ingredient-${id}`}
          name={`ingredient-${id}`}
          className="input-ingredient width-30"
          value={ingredient}
          disabled
        />
        <input
          type="number"
          min="0"
          max="1000000000"
          id={`weight-${id}`}
          name={`weight-${id}`}
          className="input-ingredient width-20"
          value={weight}
          onChange={onChangeIngredient}
          disabled
        />
        <span className="span-ingredient-count">g</span>
      </li>
    );
  }

  return (
    <li
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <span className="span-hamburger" />
      <input
        type="text"
        id={`ingredient-${id}`}
        name={`ingredient-${id}`}
        className="input-ingredient width-24"
        value={ingredient}
        onChange={onChangeIngredient}
      />
      <input
        type="number"
        min="0"
        max="1000000000"
        id={`weight-${id}`}
        name={`weight-${id}`}
        className="input-ingredient width-13"
        value={weight}
        onChange={onChangeIngredient}
      />
      <span className="span-ingredient-count">g</span>
      <button
        type="button"
        className="button-ingredient-delete"
        onClick={onRemoveIngredient}
        value={id}
      >
        삭제
      </button>
    </li>
  );
};

export default React.memo(IngredientItem);
