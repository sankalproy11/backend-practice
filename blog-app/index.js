require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require("./config/database");
const blogRoutes = require("./routes/blog");

connectDB();
app.use = express.json();

(app.use = "/api/v1"), blogRoutes;

app.get("/", (req, res) => {
  res.send("Blog App Home Route");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
