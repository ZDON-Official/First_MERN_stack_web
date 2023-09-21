require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${PORT}!!`);
});

// Routes
app.get("/", (request, response) => {
  response.json({ msg: "welcome to the app!" });
});
