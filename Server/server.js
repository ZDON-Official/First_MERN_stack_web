require("dotenv").config();

const express = require("express");

const app = express();

// Middleware
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!!`);
});

// Routes
app.get("/", (request, response) => {
  response.json({ msg: "welcome to the app!" });
});
