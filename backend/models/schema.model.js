import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  }
});

// Export the model
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
