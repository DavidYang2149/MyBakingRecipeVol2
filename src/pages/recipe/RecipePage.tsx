import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RecipeContainer from 'src/containers/recipe/RecipeContainer';
import { loadRecipe, clearRecipe } from 'src/redux/recipe/recipe';

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(clearRecipe());
    dispatch(loadRecipe(id));
  }, [dispatch, id]);

  return (
    <RecipeContainer />
  );
};

export default RecipePage;
