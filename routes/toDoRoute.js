// imports
import { Router } from "express";
import { completeTask, createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/toDoController.js";
const router = Router()

// routes
router.get('/', getTasks);
router.get('/:id', getTask);
router.patch('/:id', completeTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;