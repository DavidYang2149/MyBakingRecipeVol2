import todos from 'src/services/__mocks__/fixtures/todos';

import { Todo } from 'src/types/todo';

export async function fetchTodos(): Promise<Todo[]> {
  return Promise.resolve(todos);
}

export function XXX() {
  // TODO: Add function & Remove This funciton
}
