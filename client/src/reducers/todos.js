import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
// eslint-disable-next-line
export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case DELETE: 
      return todos.filter((todo) => todo._id  !== action.payload);
    default:
      return todos;
  }
}