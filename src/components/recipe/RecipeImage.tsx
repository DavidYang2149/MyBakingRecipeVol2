import React from 'react';

import { theBaseImageURL } from 'src/utils/static';

import './RecipeImage.scss';

export interface Props {
  image: string;
}

const RecipeImage = ({ image }: Props) => {
  const theDefaultImage = `${theBaseImageURL}assets/images/cookie.jpeg`;

  return (
    <section>
      <div>
        <label
          htmlFor="displayImage"
          className="label-recipe-image"
        >
          이미지
        </label>
        <img
          id="displayImage"
          className="img-recipe-image"
          src={image || theDefaultImage}
          width="200px"
          height="200px"
          alt="recipe"
        />
      </div>
    </section>
  );
};

export default React.memo(RecipeImage);
