import React from 'react';

import './RecipeDescription.scss';

export interface Props {
  description: string;
  onChange?: () => void;
}

const RecipeDescription = ({ description, onChange }: Props) => {
  return (
    <section>
      <label
        htmlFor="description"
        className={`${(onChange ? 'label-duty-recipe-description' : 'label-recipe-description')} block`}
      >
        만드는 방법
      </label>
      <textarea
        id="description"
        name="description"
        className="textarea-recipe"
        value={description}
        onChange={onChange}
        disabled={!(onChange)}
      />
    </section>
  );
};

export default React.memo(RecipeDescription);
