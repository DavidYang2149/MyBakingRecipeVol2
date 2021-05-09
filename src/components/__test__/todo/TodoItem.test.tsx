import React from 'react';
import { render } from '@testing-library/react';

import TodoItem, { TodoItemProps } from 'src/components/todo/TodoItem';

describe('TodoItem', () => {
  const onClickMock = jest.fn();
  beforeEach(() => {
    onClickMock.mockClear();
  });

  const renderTodoItem = ({ id, content, onRemove }: TodoItemProps) => render((
    <TodoItem
      id={id}
      content={content}
      onRemove={onRemove}
    />
  ));

  context('with value', () => {
    it('render TodoItem', () => {
      const { container } = renderTodoItem({ id: 1, content: 'Todo 할일', onRemove: onClickMock });

      expect(container).toHaveTextContent('Todo 할일');
    });
  });

  context('without value', () => {
    it('render TodoItem', () => {
      const { container } = renderTodoItem({ id: 0, content: '', onRemove: onClickMock });

      expect(container).not.toHaveTextContent('Todo 할일');
    });
  });
});
