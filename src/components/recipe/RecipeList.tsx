import React from 'react';

import RecipeItem from 'src/components/recipe/RecipeItem';
import { Recipe } from 'src/types/recipe';
import { isEmpty } from 'src/utils/tools';

import './RecipeList.scss';

export type RecipeListProps = {
  recipesBook: Recipe[];
};

const RecipeList = ({ recipesBook }: RecipeListProps) => {
  if (isEmpty(recipesBook.length)) {
    return (
      <div>Empty</div>
    );
  }

  return (
    <ul className="recipeList">
      {(
        recipesBook.map((recipe: Recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))
      )}
    </ul>
  );
};

export default React.memo(RecipeList);