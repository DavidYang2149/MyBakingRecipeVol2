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
      {!(onChange)
        ? (
          <label
            htmlFor="title"
            className="recipeLabel"
          // display="block"
          >
            레시피명
          </label>
        ) : (
          <label
            htmlFor="title"
            className="recipeDutyLabel"
          // display="block"
          >
            레시피명
          </label>
        )}
      <input
        type="text"
        id="title"
        name="title"
        className="recipeInput"
        value={title}
        onChange={onChange}
        disabled={!(onChange)}
      // width="60%"
      // display="block"
      />
      {!(onChange)
        ? (
          <>
            <label
              htmlFor="category"
              className="recipeLabel"
            // width="30%"
            // display="inline-block"
            >
              카테고리
            </label>
            <label
              htmlFor="product"
              className="recipeLabel"
            // width="20%"
            // display="inline-block"
            >
              생산량
            </label>
          </>
        ) : (
          <>
            <label
              htmlFor="category"
              className="recipeDutyLabel"
            // width="30%"
            // display="inline-block"
            >
              카테고리
            </label>
            <label
              htmlFor="product"
              className="recipeDutyLabel"
            // width="20%"
            // display="inline-block"
            >
              생산량
            </label>
          </>
        )}
      <div>
        <select
          id="category"
          name="category"
          className="recipeSelect"
          value={category}
          onChange={onChange}
          disabled={!(onChange)}
        // width="30%"
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
          className="recipeInput"
          value={product}
          onChange={onChange}
          disabled={!(onChange)}
        // width="20%"
        />
        <span className="recipeCount">개</span>
      </div>
    </section>
  );
};

export default React.memo(RecipeBasicInfo);
