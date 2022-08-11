// imports
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()

const connectDB = async () => {
  const DATABASE_URL = process.env.DB_URI
  console.log(DATABASE_URL)
  try {
    const DB_OPTIONS = {
      dbName: "tasks"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB