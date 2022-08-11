// imports
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
dotenv.config()

// create express app
const app = express();

// application layer middleware
app.use(cors());
app.use(express.json());

// connect to DataBase:
connectDB()

// listening server to port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})