import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import TodosPage from 'src/pages/todo/TodosPage';
import todo from 'src/services/__mocks__/fixtures/todo';
import todos from 'src/services/__mocks__/fixtures/todos';
import { RootState } from 'src/redux/rootReducer';

describe('TodosPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      todo,
      todos,
    }));
  });

  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <TodosPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('TodosPage');
  });
});
