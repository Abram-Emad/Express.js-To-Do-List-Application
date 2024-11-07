const express = require("express");
const router = express.Router();
const Task = require("../models/model.task");

router.get("/tasks", async (request, response) => {
  try {
    const tasks = await Task.find();
    response.status(200).json(tasks);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.post("/tasks", async (request, response) => {
  try {
    const task = new Task(request.body);
    await task.save();
    response.status(200).json({ message: "Added successfuly!", task });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.put("/tasks/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const dataToUapdate = request.body;
    const task = await Task.findByIdAndUpdate(id, dataToUapdate, { new: true });
    response.status(200).json({ message: "Updated successfuly!", task });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.delete("/tasks/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const task = await Task.findByIdAndDelete(id);
    response.status(200).json({ message: "Updated successfuly!", task });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

module.exports = router;
