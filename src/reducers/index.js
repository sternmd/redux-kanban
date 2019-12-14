// Pass in reducer to decide what the initial state is & how it changes as it receives actions

const initialState = {
  tasks: [
    { name: 'task 0', stage: 0 },
    { name: 'task 1', stage: 0 },
    { name: 'task 2', stage: 0 },
    { name: 'task 3', stage: 0 },
    { name: 'task 4', stage: 1 },
    { name: 'task 5', stage: 1 },
    { name: 'task 6', stage: 1 },
    { name: 'task 7', stage: 2 },
    { name: 'task 8', stage: 2 },
    { name: 'task 9', stage: 3 }
  ],
  selectedTask: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [
          ...state.tasks,
          {
            name: action.name,
            stage: action.stage
          }
        ]
      };
    case 'DELETE_TASK':
      return {
        tasks: [...state.tasks.filter(task => task.name !== action.name)]
      };

    case 'SELECT_TASK':
      return {
        ...state,
        selectedTask: action.name
      };
    case 'MOVE_BACK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.name === action.name && task.stage > 0 // prevent selected task from going below Backlog
            ? // transform the one with a matching name
              { ...task, stage: task.stage - 1 }
            : // otherwise return original task
              task
        )
      };
    case 'MOVE_FORWARD':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.name === action.name && task.stage < 3 // prevent selected task from going past Done
            ? // transform the one with a matching name
              { ...task, stage: task.stage + 1 }
            : // otherwise return original task
              task
        )
      };
    default:
      return state;
  }
}

export default rootReducer;
