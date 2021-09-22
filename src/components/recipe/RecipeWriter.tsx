import React from 'react';

import './RecipeWriter.scss';

export interface Props {
  user: string;
  created: string;
}

const RecipeWriter = ({ user, created }: Props) => {
  return (
    <>
      <span className="span-recipe-writer">{user}</span>
      {' '}
      <span className="span-recipe-write-date">{created.substr(0, 10)}</span>
      <hr className="hr-recipe-write-line" />
    </>
  );
};

export default React.memo(RecipeWriter);
