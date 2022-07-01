import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const Todos = () => {
  return (
    <div>
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default Todos;
