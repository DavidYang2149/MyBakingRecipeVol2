/* eslint-disable jsx-a11y/no-onchange */

import React from 'react';

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
  const categoryEnum = [
    { value: 0, text: '선택' },
    { value: 1, text: '쿠키' },
    { value: 2, text: '구움과자' },
    { value: 3, text: '케이크' },
    { value: 4, text: '빵' },
    { value: 5, text: '마카롱' },
    { value: 6, text: '기타' },
  ];

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
          {categoryEnum.map(({ value, text }) => {
            return (<option key={value} value={value}>{text}</option>);
          })}
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
