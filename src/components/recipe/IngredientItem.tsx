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
          className="ingredientInput"
          value={ingredient}
          // width="30%"
          disabled
        />
        <input
          type="number"
          min="0"
          max="1000000000"
          id={`weight-${id}`}
          name={`weight-${id}`}
          className="ingredientInput"
          value={weight}
          onChange={onChangeIngredient}
          // width="20%"
          disabled
        />
        <span className="ingredientCount">g</span>
      </li>
    );
  }

  return (
    <li
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <span className="hamburger" />
      <input
        type="text"
        id={`ingredient-${id}`}
        name={`ingredient-${id}`}
        className="ingredientInput"
        value={ingredient}
        onChange={onChangeIngredient}
        width="24%"
      />
      <input
        type="number"
        min="0"
        max="1000000000"
        id={`weight-${id}`}
        name={`weight-${id}`}
        className="ingredientInput"
        value={weight}
        onChange={onChangeIngredient}
        width="13%"
      />
      <span className="ingredientCount">g</span>
      <button
        type="button"
        className="ingredientDeleteButton"
        onClick={onRemoveIngredient}
        value={id}
      >
        삭제
      </button>
    </li>
  );
};

export default React.memo(IngredientItem);
