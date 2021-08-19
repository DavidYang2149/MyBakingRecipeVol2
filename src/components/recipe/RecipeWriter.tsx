import React from 'react';

import './RecipeWriter.scss';

export interface Props {
  user: string;
  created: string;
}

const RecipeWriter = ({ user, created }: Props) => {
  return (
    <>
      <span className="recipeWriter">{user}</span>
      {' '}
      <span className="recipeWriteDate">{created.substr(0, 10)}</span>
      <hr className="recipeWriteLine" />
    </>
  );
};

export default React.memo(RecipeWriter);
