import React from 'react';
import { Button, ListItem, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../actions/todos';
import './Todo.css'

const Todo = (todo) => {
  const dispatch = useDispatch();

  return (
    <ListItem className='todo'>
      <Typography variant='h6'>{todo.data}</Typography>
      <Button className='btn' onClick={() => dispatch(deleteTodo(todo.id))} variant="contained">X</Button>
    </ListItem>
  )
}

export default Todo;