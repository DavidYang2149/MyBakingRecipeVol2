import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TodosContainer from 'src/containers/todo/TodosContainer';
import { loadTodos } from 'src/redux/todo/todos';

import './TodosPage.scss';

const TodosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  });

  return (
    <div className="mainContainer">
      <h2 className="titleContainer">TodosPage</h2>
      <TodosContainer />
    </div>
  );
};

export default TodosPage;
