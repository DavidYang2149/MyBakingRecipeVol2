import React from 'react';

import RecipeItem from 'src/components/recipe/RecipeItem';
import { Recipe } from 'src/types/recipe';
import { isEmpty } from 'src/utils/tools';

import './RecipeList.scss';

export interface Props {
  recipesBook: Recipe[];
}

const RecipeList = ({ recipesBook }: Props) => {
  if (isEmpty(recipesBook.length)) {
    return (
      <div>Empty</div>
    );
  }

  return (
    <ul className="ul-recipe-list">
      {(
        recipesBook.map((recipe: Recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))
      )}
    </ul>
  );
};

export default React.memo(RecipeList);
