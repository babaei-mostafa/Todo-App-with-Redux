import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChange = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <span>{todo.task}</span>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => handleChange(todo.id)}
      />
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
