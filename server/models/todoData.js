import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  data: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const TodoData = mongoose.model('TodoData', todoSchema);

export default TodoData;