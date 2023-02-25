import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "./type";
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
// update
export const updateTask = (payload) => {
  return { type: UPDATE_TASK, payload };
};
// toggle
export const toggleComleted = (payload) => {
  return { type: TOGGLE_COMPLETED_TASK, payload };
};
// filter
export const filterTask = (payload) => {
  return { type: FILTER_TASK, payload };
};
