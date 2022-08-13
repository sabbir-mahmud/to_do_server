// imports
import mongoose from "mongoose";

// to do schema
const toDoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  is_done: { type: Boolean }
});

const toDoModel = mongoose.model("tasks", toDoSchema);
export default toDoModel;