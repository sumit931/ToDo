const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://sumitnegi9667:XwOSDrO5CcCNpVWj@cluster0.6gzrska.mongodb.net/todos';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo
};
