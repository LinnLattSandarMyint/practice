
const express = require("express");
const app = express();
const port = 3000;

let todos = require("./todo");

app.use(express.json()); // to read JSON body

// GET all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// GET one todo by ID
app.get("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
});

// POST add a new todo
app.post("/todos", (req, res) => {
    const { title, description } = req.body;
    const newTodo = {
        id: todos.length + 1,
        title,
        description
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE a todo
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: "Todo deleted" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
