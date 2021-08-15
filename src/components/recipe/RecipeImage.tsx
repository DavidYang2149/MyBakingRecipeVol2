import React from 'react';

import './RecipeImage.scss';

export interface Props {
  image: string;
}

const RecipeImage = ({ image }: Props) => {
  return (
    <section>
      <div>
        <label
          htmlFor="displayImage"
          className="recipeImageLabel"
        >
          이미지
        </label>
        <img id="displayImage" src={image || 'images/cookie.jpeg'} width="200px" height="200px" alt="recipe" />
      </div>
    </section>
  );
};

export default React.memo(RecipeImage);
