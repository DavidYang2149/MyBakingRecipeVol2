import React from 'react';
import { Link } from 'react-router-dom';

import { Recipe } from 'src/types/recipe';
import { theBaseImageURL } from 'src/utils/static';

import './RecipeItem.scss';

export interface Props {
  recipe: Recipe;
}

const RecipeItem = ({ recipe }: Props) => {
  const {
    id, image, title, description, created, userId,
  } = recipe;

  const theDefaultImage = `${theBaseImageURL}assets/images/cookie.jpeg`;

  return (
    <li className="recipeItem">
      <Link to={`/recipe/${id}`}>
        <figure
          className="card-image"
          style={{ backgroundImage: `url(${image || theDefaultImage})` }}
        >
          <img
            src={image || theDefaultImage}
            alt="recipe"
          />
        </figure>
        <div className="card-desc">
          <h1>{title}</h1>
          <p>{description.length > 30 ? `${description.substring(0, 30)}...` : description}</p>
          <p className="card-created">{created?.substr(0, 10)}</p>
          <p>
            by
            {' '}
            <strong>{userId.split('@')[0]}</strong>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
