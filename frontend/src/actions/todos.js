import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { tokenConfig } from './auth';
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from './types';

// GET TODOS
export const getTodos = () => async (dispatch, getState) => {
  const res = await axios.get('/api/todos/', tokenConfig(getState));
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

// GET TODO
export const getTodo = id => async (dispatch, getState) => {
  const res = await axios.get(`/api/todos/${id}/`, tokenConfig(getState));
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// ADD TODO
export const addTodo = formValues => async (dispatch, getState) => {
  const res = await axios.post(
    '/api/todos/',
    { ...formValues },
    tokenConfig(getState)
  );
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm')); // フォーム送信後、値をクリアする
};

// DELETE TODO
export const deleteTodo = id => async (dispatch, getState) => {
  await axios.delete(`/api/todos/${id}/`, tokenConfig(getState));
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
};

// EDIT TODO
export const editTodo = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.patch(
    `/api/todos/${id}/`,
    formValues,
    tokenConfig(getState)
  );
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/');
};
