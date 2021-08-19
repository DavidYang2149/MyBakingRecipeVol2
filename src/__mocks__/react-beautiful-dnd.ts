/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const Droppable = ({ children }) => children({
  draggableProps: {
    style: {},
    'data-rbd-draggable-context-id': '',
    'data-rbd-draggable-id': '',
  },
  dragHandleProps: {
    'data-rbd-drag-handle-draggable-id': '',
    'data-rbd-drag-handle-context-id': '',
    'aria-describedby': '',
    role: '',
    tabIndex: 0,
    draggable: true,
    onDragStart: jest.fn(),
  },
  innerRef: jest.fn(),
}, {});

export const Draggable = ({ children }) => children({
  draggableProps: {
    style: {},
    'data-rbd-draggable-context-id': '',
    'data-rbd-draggable-id': '',
  },
  dragHandleProps: {
    'data-rbd-drag-handle-draggable-id': '',
    'data-rbd-drag-handle-context-id': '',
    'aria-describedby': '',
    role: '',
    tabIndex: 0,
    draggable: true,
    onDragStart: jest.fn(),
  },
  innerRef: jest.fn(),
}, {});

export const DragDropContext = ({ children }) => children;
