const Todo = require("../models/todoModel");

// Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
};

// Add a todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({ title, description });
  await newTodo.save();
  res.status(201).json(newTodo);
};
// update a todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  if(!updatedTodo){
    return res.status(404).json({message:"Not found"});

  }
  res.json(updatedTodo);
};

//Delete a todo
exports.deleteTodo =async(req,res)=>{
    const { id }=req.params;
    const deletedTodo= await Todo.findByIdAndDelete(id);
    if(!deletedTodo){
        return res.status(404).json({message:"Not found"});

    }
    res.json({message:"Successfully deleted!"});
}
