const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

router.get('/todo', todoController.getAllTodo);
router.get('/todo/:_id', todoController.getSingleTodo);
router.post('/addtodo', todoController.createTodo);
router.delete('/:_id', todoController.deleteTodo);
router.patch('/:_id', todoController.updateTodo);

module.exports = router;