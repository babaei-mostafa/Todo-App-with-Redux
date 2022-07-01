import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "complete" && todo.isComplete) {
      return true;
    }
    if (filter === "incomplete" && !todo.isComplete) return true;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosList;
