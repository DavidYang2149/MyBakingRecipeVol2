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

  const onChangeRecipeInput = (event: { target: HTMLInputElement; }) => {
    const { name, value } = event.target;
    dispatch(changeRecipe({ name, value }));
  };

  const onChangeRecipeSelect = (event: { target: HTMLSelectElement; }) => {
    const { name, value } = event.target;
    dispatch(changeRecipe({ name, value }));
  };

  const onChangeRecipeTextArea = (event: { target: HTMLTextAreaElement; }) => {
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
          onChange={onChangeRecipeInput}
        />
        <label htmlFor="category">카테고리</label>
        <select
          id="category"
          name="category"
          value={category}
          onBlur={onChangeRecipeSelect}
          onChange={onChangeRecipeSelect}
        >
          <option value="0">선택</option>
          <option value="1">쿠키</option>
          <option value="2">구움과자</option>
          <option value="3">케이크</option>
          <option value="4">빵</option>
          <option value="5">마카롱</option>
          <option value="6">기타</option>
        </select>
        <label htmlFor="product">생산량</label>
        <input
          type="number"
          id="product"
          name="product"
          value={product}
          onChange={onChangeRecipeInput}
        />
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
          {
            ingredients.map(({ id, ingredient, weight }) => {
              return (
                <li key={id}>
                  <label htmlFor={`ingredient${id}`}>재료</label>
                  <input
                    type="text"
                    id={`ingredient${id}`}
                    name={`ingredient${id}`}
                    value={ingredient}
                    onChange={onChangeRecipeInput}
                  />
                  <label htmlFor={`weight${id}`}>용량</label>
                  <input
                    type="number"
                    id={`weight${id}`}
                    name={`weight${id}`}
                    value={weight}
                    onChange={onChangeRecipeInput}
                  />
                  <span>g</span>
                </li>
              );
            }).join('')
          }
        </ul>
      </section>

      <section>
        <label htmlFor="description">만드는 방법</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onChangeRecipeTextArea}
        />
      </section>

      <div>
        <button type="button">저장하기</button>
      </div>
    </article>
  );
};

export default RecipeWriteContainer;
