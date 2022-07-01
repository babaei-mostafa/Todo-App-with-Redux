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
