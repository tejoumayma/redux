import { ADD_TASK, DELETE_TASK, SET_CURRENT_TASK } from "../action/type";

const initialstate = {
  todos: [],
  current: null,
  FilteredTodos: [],
};
const taskReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TASK:
      return {
        ...state,
        todos: [state.todos.filter((todo) => todo.id !== payload)],
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
