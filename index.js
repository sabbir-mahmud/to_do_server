// imports
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
import taskRouter from './routes/toDoRoute.js';
dotenv.config();

// create express app
const app = express();

// application layer middleware
app.use(cors());
app.use(express.json());

// connect to DataBase:
connectDB();

// routes
// root route
app.get('/', async (req, res) => {
  res.send(
    "server running"
  );
});

// tasks route
app.use('/api/tasks', taskRouter);

// listening server to port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});