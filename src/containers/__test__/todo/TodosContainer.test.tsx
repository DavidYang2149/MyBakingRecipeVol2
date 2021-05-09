import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';

import todo from 'src/services/__mocks__/fixtures/todo';
import todos from 'src/services/__mocks__/fixtures/todos';
import TodosContainer from 'src/containers/todo/TodosContainer';

jest.mock('react-redux');

describe('TodosContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      todo,
      todos,
    }));
  });

  it('render TodosContainer', () => {
    render(<TodosContainer />);
  });

  it('onChangeTodoAdd', () => {
    const { getByLabelText } = render(<TodosContainer />);

    const label = getByLabelText('New Todo') as HTMLInputElement;
    expect(label.value).toBe('');

    fireEvent.change(label, {
      target: {
        name: 'content',
        value: '새로운 할일',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'todo/changeTodo',
      payload: { name: 'content', value: '새로운 할일' },
    });
  });

  it('onClickTodoAdd', () => {
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      todo: { id: 0, content: 'Add New Task' },
      todos,
    }));

    const { getByText } = render(<TodosContainer />);

    fireEvent.click(getByText('Add Button'));

    // XXX: todos/setAddNewTodo, todo/clearTodo
    expect(dispatch).toBeCalledTimes(2);

    expect(dispatch).toBeCalledWith({
      type: 'todos/setAddNewTodo',
      payload: {
        todo: {
          id: 0,
          content: 'Add New Task',
        },
      },
    });
  });

  it('onClickRemoveTodo', () => {
    const { getAllByText } = render(<TodosContainer />);

    const label = getAllByText('remove') as HTMLButtonElement[];

    fireEvent.click(label[0]);

    expect(dispatch).toBeCalledWith({
      type: 'todos/removeTodo',
      payload: { id: 1 },
    });
  });
});
