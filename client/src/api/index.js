import axios from 'axios';

const url = 'https://ppb-todo-db.herokuapp.com/todos';

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);