// controllers/todoController.js

const todoService = require('../services/todoService');

exports.getAllTodo = async (req, res) => {
    try {
        const Todo = await todoService.getAllTodos();
        res.json(Todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const todoData = req.body;
        const todo = await todoService.createTodo(todoData);
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params._id;
        console.log("Todo ID:", todoId);
        const todo = await todoService.deleteTodo(todoId);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const todoId = req.params._id;
        const updateData = req.body;
        const updatedTodo = await todoService.updateTodo(todoId, updateData);
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getSingleTodo = async (req, res) => {
    try {
        const todoId = req.params._id;
        const Todo = await todoService.getSingleTodo(todoId);
        res.json(Todo);
    } catch (error) {
        console.error('Error getting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}