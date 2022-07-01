import { createStore } from "redux";
import todosReducer from "./todos/todosReducer";
import filterReducer from "./filter/filterReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
