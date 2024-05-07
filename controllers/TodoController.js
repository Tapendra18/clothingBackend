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
    await todos.save();
    return res.status(200).send({
      success: true,
      data: todos,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      data: err,
    });
  }
};

liveController.todoRemove = async function (req, res) {
  try {
    const todos = await todo.deleteOne({ _id: req.params._id });
    return res.status(200).send({
      success: true,
      data: todos,
      msg: "successfully delete",
    });
  } catch (err) {
    return res.status(500).send({ success: false, msg: err });
  }
};

liveController.todoUpdate = async function (req, res) {
  try {
    const todos = await todo.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    await todos.save();
    return res.status(200).send({
      success: true,
      data: todos,
      msg : "success update successfully"
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

module.exports = liveController;
