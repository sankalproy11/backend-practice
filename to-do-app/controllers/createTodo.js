const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;
    //create new todo object and insert in db
    const response = await Todo.create({ title, description });
    //send success response in json
    res.status(200).json({
      status: "success",
      data: response,
      message: "Todo created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      data: null,
      message: error.message,
    });
  }
};
