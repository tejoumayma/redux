import { ADD_TASK, DELETE_TASK, SET_CURRENT_TASK } from "./type";
// add
export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};
// delete
export const deletTask = (payload) => {
  return { type: DELETE_TASK, payload };
};
// edit
export const setCurrentTask = (payload) => {
  return { type: SET_CURRENT_TASK, payload };
};
