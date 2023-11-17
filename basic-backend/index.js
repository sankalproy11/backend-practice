const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cars2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  const result = req;
  res.send("Car created");
});
