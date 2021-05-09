import React from 'react';
import { render } from '@testing-library/react';

import TodoList, { TodoListProps } from 'src/components/todo/TodoList';

describe('TodoList', () => {
  const onClickMock = jest.fn();
  beforeEach(() => {
    onClickMock.mockClear();
  });

  const renderTodoList = ({ todos, onRemove }: TodoListProps) => render((
    <TodoList
      todos={todos}
      onRemove={onRemove}
    />
  ));

  context('with value', () => {
    it('render TodoList', () => {
      const { container } = renderTodoList({ todos: [{ id: 1, content: 'Todo 할일' }], onRemove: onClickMock });

      expect(container).toHaveTextContent('Todo 할일');
    });
  });

  context('without value', () => {
    it('render TodoList', () => {
      const { container } = renderTodoList({ todos: [], onRemove: onClickMock });

      expect(container).toHaveTextContent('Todo List Empty');
    });
  });
});
