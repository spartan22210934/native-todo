import Todo from "../models/todos.model.js";

// GET all todos (Convex: getTodos)
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// POST new todo (Convex: addTodo)
export const addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text, isCompleted: false });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to add todo" });
  }
};

// PATCH toggle isCompleted (Convex: toggleTodo)
export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todo.isCompleted = !todo.isCompleted;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: "Failed to toggle todo" });
  }
};

// DELETE a todo (Convex: deleteTodo)
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete todo" });
  }
};

// PATCH update text (Convex: updateTodo)
export const updateTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update todo" });
  }
};

// DELETE all todos (Convex: clearAllTodos)
export const clearAllTodos = async (req, res) => {
  try {
    const result = await Todo.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear todos" });
  }
};
