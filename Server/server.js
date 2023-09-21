require("dotenv").config();

const express = require("express");

const workout_routes = require("./Routes/workouts");

const app = express();

// Middleware
app.use(express.json());
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!!`);
});

// Routes
app.use("/api/workout", workout_routes);
