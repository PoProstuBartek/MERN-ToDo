import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../actions/todos';
import './Form.css';

const Form = () => {
  const [todoData, setTodoData] = useState({
    data: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(todoData));
    clear();
  };

  const clear = () => {
    setTodoData({ data: ''});
  }
  
  return (
    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Add to-do" variant="outlined" value={todoData.data} onChange={(e) => setTodoData({ ...todoData, data: e.target.value})}/>
      <Button variant="contained" type='submit'>Add</Button>
    </form>
  )
}

export default Form;