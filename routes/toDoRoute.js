// imports
import { Router } from "express";
import { createTask, getTask, getTasks } from "../controllers/toDoController.js";
const router = Router()



// routes
router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);

export default router;