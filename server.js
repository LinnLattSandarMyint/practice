const express = require("express");
require("./db/connect.js");

const todoRoutes = require("./routes/todoRoutes");
const userRoutes=require("./routes/userRoutes.js");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/auth",userRoutes);

// Connect to MongoDB and start server

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

