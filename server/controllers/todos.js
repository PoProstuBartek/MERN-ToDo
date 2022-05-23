import TodoData from '../models/todoData.js';
import mongoose from 'mongoose';

export const getTodos = async (req, res) => {
  try {
    const todoData = await TodoData.find();

    res.status(200).json(todoData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createTodo = async (req, res) => {
  const todo = req.body;

  const newTodo = new TodoData(todo);

  try {
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No todo with that id');

  await TodoData.findByIdAndRemove(id);

  res.json({ message: 'Todo deleted successfully'});
}