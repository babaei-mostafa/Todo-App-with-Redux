import React from "react";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodosList from "./TodosList";

const Todos = () => {
  return (
    <div>
      <AddTodo />
      <Filter />
      <TodosList />
    </div>
  );
};

export default Todos;
