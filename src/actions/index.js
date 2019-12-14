let initialStage = 0;

export const addTask = name => ({
  type: 'ADD_TASK',
  name,
  stage: initialStage
});

export const deleteTask = name => ({
  type: 'DELETE_TASK',
  name
});

export const selectTask = name => ({
  type: 'SELECT_TASK',
  name
});

export const moveBack = name => ({
  type: 'MOVE_BACK',
  name
});

export const moveForward = name => ({
  type: 'MOVE_FORWARD',
  name
});
