// imports
import toDoModel from '../models/toDoModels.js';

// controllers
// get all task
const getTasks = async (req, res) => {
  const result = await toDoModel.find({})
  res.send(result)
}

// get task via id
const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await toDoModel.findById(id)
    if (result) {
      return res.send(result)
    } else {
      return res.send({
        message: "No Task Found"
      })
    }

  } catch (error) {
    console.log(error);
  }
}

// create task
const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const data = new toDoModel({
        name: name,
        is_done: false
      });
      const result = await data.save();
      return res.send(result)

    } else {
      return res.send({
        message: "Please fill the required fields"
      })
    }

  } catch (error) {
    console.log(error);

  }
}

export {
  getTasks,
  getTask,
  createTask

};

