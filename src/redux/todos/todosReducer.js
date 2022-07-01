import { TODOS_ACTIONS } from "./todosTypes";

const initialState = {
  todos: [
    { id: 1, task: "Do the dishes", isComplete: true },
    { id: 2, task: "Buy milk", isComplete: false },
    { id: 3, task: "Cleaning the room", isComplete: true },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, newTodo(action.payload)] };
    case TODOS_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODOS_ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    default:
      return state;
  }
};

const newTodo = (task) => {
  return {
    id: Date.now(),
    task: task,
    isComplete: false,
  };
};

export default todosReducer;
