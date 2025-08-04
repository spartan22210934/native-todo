import express from "express";
import {
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  clearAllTodos,
} from "../controllers/todos.controller.js";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.patch("/todos/:id/toggle", toggleTodo);
router.delete("/todos/:id", deleteTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos", clearAllTodos);

export default router;
