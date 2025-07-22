const express = require('express');
const router = express.Router();
const todoController = require('../services/todoServices');

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.put('/:id',todoController.updateTodo);
router.delete('/:id',todoController.deleteTodo);

module.exports = router;
