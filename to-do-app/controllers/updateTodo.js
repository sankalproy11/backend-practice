const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );
    res.status(200).json({
      status: "success",
      data: response,
      message: "Todo updated successfully",
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
