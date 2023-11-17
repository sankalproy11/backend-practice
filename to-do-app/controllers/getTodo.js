const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all todos from db
    const response = await Todo.find();
    res.status(200).json({
      status: "success",
      data: response,
      message: "All Todos fetched successfully",
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

exports.getTodoById = async (req, res) => {
  try {
    // fetch todo by id from db
    const id = req.params.id;
    const response = await Todo.findById({ _id: id });
    if (!response) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: response,
      message: "Todo fetched successfully",
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
