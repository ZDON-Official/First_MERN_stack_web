require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workout_routes = require("./Routes/workouts");

const app = express();

// Middleware
app.use(express.json());
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

// Routes
app.use("/api/workouts", workout_routes);

// Connect to mongooseDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB and listening on port ${process.env.PORT}!!`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
