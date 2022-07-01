import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add Your Todo</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
