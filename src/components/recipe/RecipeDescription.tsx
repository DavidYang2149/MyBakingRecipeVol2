import React from 'react';

import './RecipeBasicInfo.scss';

export interface Props {
  description: string;
  onChange?: () => void;
}

const RecipeDescription = ({ description, onChange }: Props) => {
  return (
    <section>
      <label
        htmlFor="description"
        className={onChange ? 'recipeDutyDescription' : 'recipeDescription'}
      // display="block"
      >
        만드는 방법
      </label>
      <textarea
        id="description"
        name="description"
        className="recipeTextarea"
        value={description}
        onChange={onChange}
        disabled={!(onChange)}
      />
    </section>
  );
};

export default React.memo(RecipeDescription);
