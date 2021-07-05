import React from 'react';
import { useSelector } from 'react-redux';

import Loading from 'src/components/common/Loading';
import RecipeList from 'src/components/recipe/RecipeList';
import { RootState } from 'src/redux/rootReducer';
import { isEmpty } from 'src/utils/tools';

const RecipesContainer = () => {
  const { recipes } = useSelector((state: RootState) => ({
    recipes: state.recipes,
  }));
  const { recipesBook } = recipes;

  if (isEmpty(recipesBook.length)) {
    return (
      <Loading />
    );
  }

  return (
    <article>
      <RecipeList recipesBook={recipesBook} />
    </article>
  );
};

export default RecipesContainer;
