import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getTodos } from './actions/todos';
import './index.css'
import Form from './components/Form/Form';
import TodosList from './components/TodosList/TodosList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Container className='container' maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>ToDo list</Typography>
      </AppBar>
      <Paper>
        <Form />
      </Paper>
      <Paper className='listWrapper' elevation={6}> 
        <TodosList />
      </Paper>
    </Container>
  )
}

export default App;