// models/todo.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    completed: { type: Boolean, required: true },
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;
