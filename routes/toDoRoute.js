// imports
import { Router } from "express";
import { completeTask, createTask, getTask, getTasks } from "../controllers/toDoController.js";
const router = Router()

// routes
router.get('/', getTasks);
router.get('/:id', getTask);
router.patch('/:id', completeTask);
router.post('/', createTask);

export default router;