import React from 'react';

import { isEmpty } from 'src/utils/tools';

export type TodoItemProps = {
  id: number;
  content: string;
  onRemove: ({ id }: { id: number }) => void;
};

const TodoItem = ({ id, content, onRemove }: TodoItemProps) => {
  if (isEmpty(id)) {
    return (
      <></>
    );
  }

  return (
    <>
      <p>{content}</p>
      <button
        type="button"
        onClick={() => onRemove({ id })}
      >
        remove
      </button>
    </>
  );
};

export default TodoItem;
