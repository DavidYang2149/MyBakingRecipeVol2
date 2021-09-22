/* eslint-disable no-alert */

import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from 'src/components/common/Loading';
import RecipeTitle from 'src/components/recipe/RecipeTitle';
import RecipeWriter from 'src/components/recipe/RecipeWriter';
import RecipeImage from 'src/components/recipe/RecipeImage';
import RecipeBasicInfo from 'src/components/recipe/RecipeBasicInfo';
import RecipeDescription from 'src/components/recipe/RecipeDescription';
import IngredientList from 'src/components/recipe/IngredientList';
// import { removeRecipe, removeFile } from 'src/redux/recipe';
// import { updateRecipes } from 'src/redux/recipes';
import { RootState } from 'src/redux/rootReducer';

import './RecipeContainer.scss';

const RecipeContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { user, recipe } = useSelector((state: RootState) => ({
    user: state.user,
    recipe: state.recipe,
  }));

  const {
    id, userId, title, category, product, ingredients, description, image, created,
  } = recipe;

  const onRemove = useCallback(() => {
    const isDelete = window.confirm('레시피를 삭제하시겠습니까?');
    if (!(isDelete)) { return; }

    setLoading(true);
    // await dispatch(removeFile());
    // await dispatch(removeRecipe());
    // await dispatch(updateRecipes());
    history.push('/');
  }, [history]);

  if (!(id)) { return (<Loading />); }

  return (
    <article>
      <RecipeTitle title={title} />
      <RecipeWriter user={userId} created={created || ''} />
      <RecipeImage image={image || ''} />
      <RecipeBasicInfo
        title={title}
        category={category}
        product={product}
      />
      <IngredientList
        ingredients={ingredients}
      />
      <RecipeDescription
        description={description}
      />

      {
        !!(userId) && (userId === user.userId) && (
          <section>
            <Link to={`/recipewrite/${id}`}>
              <button
                type="button"
                className="button-recipe-owner"
              >
                수정하기
              </button>
            </Link>
            <button
              type="button"
              className="button-recipe-owner"
              onClick={onRemove}
              disabled={loading}
            >
              삭제하기
            </button>
          </section>
        )
      }
      {loading && <Loading />}
    </article>
  );
};

export default RecipeContainer;
