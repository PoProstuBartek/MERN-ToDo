import React from 'react';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';
import { CircularProgress, List } from '@material-ui/core';

const TodosList = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    !todos.length ? <CircularProgress /> : (
      <List >
        {
          todos.map((todo) => (
            <Todo key={todo._id} data={todo.data} id={todo._id}/>
          ))
        }
      </List>
    )
  )
}

export default TodosList;