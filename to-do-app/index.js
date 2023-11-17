require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const todoRoutes = require("./routes/todos");
const connectDB = require("./config/db");

connectDB();
app.use(express.json());

// mount the todo apis routes
app.use("/api/v1/", todoRoutes);

app.listen(port, () => console.log(`Server running on port ${port}!`));

app.get("/", (req, res) => {
  res.send("<h1>ToDo App Home Route</h1>");
});
