import React from "react";
import { connect, useSelector } from "react-redux";
import { addTodo } from "../redux";
import TodoItem from "./TodoItem";

// const todos = [
//   { id: 1, task: "Do the dishes", isComplete: true },
//   { id: 2, task: "Buy milk", isComplete: false },
//   { id: 3, task: "Cleaning the room", isComplete: true },
// ];

const TodosList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h3>Your Todos</h3>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: dispatch(addTodo()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
export default TodosList;
