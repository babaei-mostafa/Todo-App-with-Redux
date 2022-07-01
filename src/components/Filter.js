import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAll, showComplete, showIncomplete } from "../redux";
import todosReducer from "../redux/todos/todosReducer";

const Filter = () => {
  // const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(showAll())}>Show All</button>
      <button onClick={() => dispatch(showComplete())}>Show Complete</button>
      <button onClick={() => dispatch(showIncomplete())}>
        Show Incomplete
      </button>
    </>
  );
};

export default Filter;
