import { TODOS_ACTIONS } from "./todosTypes";

export const addTodo = (task) => {
  return {
    type: TODOS_ACTIONS.ADD_TODO,
    payload: task,
  };
};

export const deleteTodo = (id) => {
  return {
    type: TODOS_ACTIONS.DELETE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TODOS_ACTIONS.TOGGLE_TODO,
    payload: id,
  };
};
