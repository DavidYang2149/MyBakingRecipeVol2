import React from 'react';
import { Link } from 'react-router-dom';

import { Recipe } from 'src/types/recipe';
import { splitReturnFirst } from 'src/utils/tools';

import './RecipeItem.scss';

export interface Props {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: Props) => {
  const {
    id, image, title, description, created, userId,
  } = recipe;

  return (
    <li className="recipeItem">
      <Link to={`/recipe/${id}`}>
        <figure className="card-image" style={{ backgroundImage: `url(${image || 'assets/images/cookie.jpeg'})` }}>
          <img src={image || 'assets/images/cookie.jpeg'} alt="recipe" />
        </figure>
        <div className="card-desc">
          <h1>{title}</h1>
          <p>{description.length > 30 ? `${description.substring(0, 30)}...` : description}</p>
          <p className="card-created">{created?.substr(0, 10)}</p>
          <p>
            by
            {' '}
            <strong>{splitReturnFirst(userId)('@')}</strong>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
