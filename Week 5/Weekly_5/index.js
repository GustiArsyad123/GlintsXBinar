const express = require("express"); //Import express

const todo = require("./routes/user"); //Import routes user and task
const task = require("./routes/task");

const errorHandler = require("./middlewares/errorHandler"); // Import error Handler

const port = process.env.PORT || 3000; // Define port

// Make express app
const app = express();

// Enable req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make routes
app.use("/todo", todo);
app.use("/task", task);

// If routes not exist
app.all("*", (req, res, next) => {
  next({ statusCode: 404, message: "The endpoint not found" });
});

// Enable error handler
app.use(errorHandler);

// Run server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
