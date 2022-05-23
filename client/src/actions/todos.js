import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators - are functions that return an action, while using react-thunk, we are using async dispatch on action instead of simply returning it
export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodos();

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo)

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
}