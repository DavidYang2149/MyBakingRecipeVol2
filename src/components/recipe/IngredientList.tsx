/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Ingredient } from 'src/types/recipe';
import IngredientItem from './IngredientItem';

import './IngredientList.scss';

export interface Props {
  ingredients: Ingredient[];
  onChangeIngredient?: () => void;
  onRemoveIngredient?: () => void;
  onDragEndIngredient?: () => void;
}

const IngredientList = ({
  ingredients, onChangeIngredient, onRemoveIngredient, onDragEndIngredient,
}: Props) => {
  if (!onDragEndIngredient) {
    return (
      <section>
        <ul>
          <li>
            <label
              className="label-ingredient-name"
            // width="32%"
            // display="inline-block"
            >
              원재료
            </label>
            <label
              className="label-ingredient-name"
            // width="20%"
            // display="inline-block"
            >
              용량
            </label>
          </li>
          {
            ingredients.map(({ id, ingredient, weight }) => {
              return (
                <IngredientItem
                  key={id}
                  id={id}
                  ingredient={ingredient}
                  weight={weight}
                  onChangeIngredient={onChangeIngredient}
                  onRemoveIngredient={onRemoveIngredient}
                />
              );
            })
          }
        </ul>
      </section>
    );
  }

  return (
    <section>
      <DragDropContext onDragEnd={onDragEndIngredient}>
        <Droppable droppableId="ingredients">
          {(provided) => (
            <ul
              className="ingredients"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                ingredients.map(({ id, ingredient, weight }, index) => {
                  return (
                    <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                      {(subProvided) => (
                        <IngredientItem
                          key={id}
                          id={id}
                          ingredient={ingredient}
                          weight={weight}
                          onChangeIngredient={onChangeIngredient}
                          onRemoveIngredient={onRemoveIngredient}
                          provided={subProvided}
                        />
                      )}
                    </Draggable>
                  );
                })
              }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default React.memo(IngredientList);
