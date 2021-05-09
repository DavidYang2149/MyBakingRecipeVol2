import reducer, { setTodo, changeTodo, clearTodo } from 'src/redux/todo/todo';
import { Todo } from 'src/types/todo';

jest.mock('src/services/todo/todos');

describe('todo reducer', () => {
  const initialState: Todo = { id: 0, content: '' };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setTodo', () => {
    it('setTodo', () => {
      const todo: Todo = {
        id: 0,
        content: '새로운 할일',
      };

      const state = reducer(initialState, setTodo(todo));

      expect(state).toEqual(todo);
    });
  });

  describe('changeTodo', () => {
    it('changes todo', () => {
      const contentData = {
        name: 'content',
        value: '새로운 할일',
      };
      const result: Todo = {
        id: 0,
        content: '새로운 할일',
      };

      const state = reducer(initialState, changeTodo(contentData));

      expect(state).toEqual(result);
    });
  });

  describe('clearTodo', () => {
    it('clear todo', () => {
      const state = reducer(initialState, clearTodo());

      expect(state).toEqual(initialState);
    });
  });
});
