import React from 'react';

const RecipeWritePage = () => {
  return (
    <>
      <div>
        레시피 작성 페이지
      </div>

      <section>
        <label htmlFor="name">레시피명</label>
        <input type="text" id="name" />
        <label htmlFor="category">카테고리</label>
        <select id="category">
          <option>쿠키</option>
          <option>구움과자</option>
          <option>케이크</option>
          <option>빵</option>
          <option>마카롱</option>
          <option>기타</option>
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
        <label htmlFor="process">만드는 방법</label>
        <textarea id="process" />
      </section>

      <section>
        <button type="button">저장하기</button>
      </section>
    </>
  );
};

export default RecipeWritePage;
