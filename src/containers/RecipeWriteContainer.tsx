import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeRecipe } from '../redux/recipe';
import { RootState } from '../redux/rootReducer';

const RecipeWriteContainer = () => {
  const dispatch = useDispatch();

  const { recipe } = useSelector((state: RootState) => ({
    recipe: state.recipe,
  }));

  const {
    title,
    category,
    product,
    ingredients,
    description,
  } = recipe;

  const onChangeRecipe = (event: { target: HTMLInputElement; }) => {
    const { name, value } = event.target;
    dispatch(changeRecipe({ name, value }));
  };

  return (
    <article>
      <div>
        레시피 작성 페이지
      </div>

      <section>
        <label htmlFor="title">레시피명</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChangeRecipe}
        />
        <label htmlFor="category">카테고리</label>
        <select id="category" value={category}>
          <option value="">쿠키</option>
          <option value="">구움과자</option>
          <option value="">케이크</option>
          <option value="">빵</option>
          <option value="">마카롱</option>
          <option value="">기타</option>
        </select>
        <label htmlFor="product">생산량</label>
        <input type="number" id="product" />
      </section>

      <section>
        <label htmlFor="ingredient">재료</label>
        <input type="text" id="ingredient" />
        <label htmlFor="weight">용량</label>
        <input type="number" id="weight" />
        <span>g</span>
        <button type="button">추가하기</button>
      </section>

      <section>
        <ul>
          <li>
            <label htmlFor="ingredient1">재료</label>
            <input type="text" id="ingredient1" />
            <label htmlFor="weight1">용량</label>
            <input type="number" id="weight1" />
            <span>g</span>
          </li>
        </ul>
      </section>

      <section>
        <label htmlFor="description">만드는 방법</label>
        <textarea id="description" />
      </section>

      <div>
        <button type="button">저장하기</button>
      </div>
    </article>
  );
};

export default RecipeWriteContainer;
