// services/todoService.js

const Todo = require('../models/todo');

exports.getAllTodos = async () => {
    return await Todo.find();
};

exports.getSingleTodo = async (todoId) => {
    try {
        const singleTodo = await Todo.findById(todoId);
        return singleTodo;
    } catch (error) {
        throw new Error(`Error deleting todo: ${error.message}`);
    }
}

exports.createTodo = async (todoData) => {
    const todo = new Todo(todoData);
    await todo.save();
    return todo;
};


exports.deleteTodo = async (todoId) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        console.log("Deleted Todo:", deletedTodo);
        return deletedTodo;
    } catch (error) {
        throw new Error(`Error deleting todo: ${error.message}`);
    }
};

exports.updateTodo = async (todoId, updateData) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, updateData, { new: true });
        return updatedTodo;
    } catch (error) {
        throw new Error(`Error updating todo: ${error.message}`);
    }
};
