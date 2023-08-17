import { ADD_USER, GET_USER, SHOW_USER, UPDATE_USER } from "./actionType";

export const fetchUser = (payload) => ({
  type: GET_USER,
  payload: payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload,
});

export const addUser = (payload) => ({
  type: ADD_USER,
  payload: payload,
});

export const showUser = (payload)=>({
  type:SHOW_USER,
  payload:payload,
})