import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import InfiniteScroll from 'src/components/common/InfiniteScroll';
import RecipesContainer from 'src/containers/recipe/RecipesContainer';
import { loadRecipes } from 'src/redux/recipe/recipes';

const RecipesPage = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  InfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        dispatch(loadRecipes());
      }
    },
  });

  return (
    <>
      <RecipesContainer />
      <div ref={setTarget} />
    </>
  );
};

export default RecipesPage;
