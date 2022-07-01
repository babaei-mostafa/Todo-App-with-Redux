import React from "react";
import { useDispatch } from "react-redux";
import { showAll, showComplete, showIncomplete } from "../redux";

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
