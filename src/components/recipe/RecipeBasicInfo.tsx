/* eslint-disable jsx-a11y/no-onchange */

import React from 'react';

import { CategoryUnionType } from 'src/types/recipe';

import './RecipeBasicInfo.scss';

export interface Props {
  title: string;
  category: number;
  product: number;
  onChange?: () => void;
}

const RecipeBasicInfo = ({
  title, category, product, onChange,
}: Props) => {
  return (
    <section>
      <label
        htmlFor="title"
        className={`${onChange ? 'duty' : ''} label-recipe block`}
      >
        레시피명
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="input-recipe block width-60"
        value={title}
        onChange={onChange}
        disabled={!(onChange)}
      />
      <label
        htmlFor="category"
        className={`${onChange ? 'duty' : ''} label-recipe inline-block width-30`}
      >
        카테고리
      </label>
      <label
        htmlFor="product"
        className={`${onChange ? 'duty' : ''} label-recipe inline-block width-20`}
      >
        생산량
      </label>
      <div>
        <select
          id="category"
          name="category"
          className="select-recipe width-30"
          value={category}
          onChange={onChange}
          disabled={!(onChange)}
        >
          {
            Object.entries(CategoryUnionType).map(([value, text]) => {
              return (<option key={value} value={value}>{text}</option>);
            })
          }
        </select>
        <input
          type="number"
          min="0"
          max="1000000000"
          id="product"
          name="product"
          className="input-recipe inline-block width-20"
          value={product}
          onChange={onChange}
          disabled={!(onChange)}
        />
        <span className="span-recipe-count inline-block">개</span>
      </div>
    </section>
  );
};

export default React.memo(RecipeBasicInfo);
