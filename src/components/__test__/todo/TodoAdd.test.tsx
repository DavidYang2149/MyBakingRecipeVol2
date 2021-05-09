import React from 'react';
import { render } from '@testing-library/react';

import TodoAdd, { TodoAddProps } from 'src/components/todo/TodoAdd';

describe('TodoAdd', () => {
  const onChangeMock = jest.fn();
  const onClickMock = jest.fn();
  beforeEach(() => {
    onChangeMock.mockClear();
    onClickMock.mockClear();
  });

  const renderTodoAdd = ({ todo: { id, content }, onChange, onClick }: TodoAddProps) => render((
    <TodoAdd
      todo={{ id, content }}
      onChange={onChange}
      onClick={onClick}
    />
  ));

  context('with value', () => {
    it('render TodoAdd', () => {
      const { getByLabelText, getByText } = renderTodoAdd({
        todo: { id: 0, content: 'Todo 할일' }, onChange: onChangeMock, onClick: onClickMock,
      });

      expect(getByLabelText('New Todo')).toHaveValue('Todo 할일');
      expect(getByText('Add Button')).not.toBeDisabled();
    });
  });

  context('without value', () => {
    it('render TodoAdd', () => {
      const { getByLabelText, getByText } = renderTodoAdd({
        todo: { id: 0, content: '' }, onChange: onChangeMock, onClick: onClickMock,
      });

      expect(getByLabelText('New Todo')).toHaveValue('');
      expect(getByText('Add Button')).toBeDisabled();
    });
  });
});
