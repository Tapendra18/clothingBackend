const todo = require("../models/TodoModel");
const liveController = {};

liveController.todoGet = async function (req, res) {
  try {
    const todos = await todo.find();
    return res.status(200).send({
      success: true,
      data: todos,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

liveController.todoPost = async function (req, res) {
  try {
    const todos = new todo(req.body);
    console.log(todos);
    await todos.save();
    return res.status(200).send({
      success: true,
      data: todos,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

module.exports = liveController;
