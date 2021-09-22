import React from 'react';

import './RecipeTitle.scss';

export interface Props {
  title: string;
}

const RecipeTitle = ({ title }: Props) => {
  return (
    <p className="p-recipe-title">
      {title}
    </p>
  );
};

export default React.memo(RecipeTitle);
