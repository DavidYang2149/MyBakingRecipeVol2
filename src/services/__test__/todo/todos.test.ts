import sampleTodos from 'src/services/__mocks__/fixtures/todos';
import { fetchTodos, XXX } from 'src/services/todo/todos';

test('todos', async () => {
  const todos = await fetchTodos();

  expect(todos[0]).toEqual(sampleTodos[0]);
});

// TODO: Add function & Remove This funciton
test('XXX', () => {
  XXX();
});
