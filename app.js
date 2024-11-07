const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require("./routes/routes.tasks");

const app = express();
const port = 8800;

// Middleware
app.use(express.json());

app.use(tasksRoutes);

// DB Connection
mongoose.connect("mongodb://admin:admin@localhost:27017/todo?authSource=admin");

const db = mongoose.connection;

// Monitoring DB Connection
db.on("error", () => {
  console.log("Connection Error!");
});

db.once("open", () => {
  console.log("Connection to DB!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
