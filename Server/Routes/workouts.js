const express = require("express");

const Workout = require("../models/workoutModel.js");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workouts" });
});

// POST a new workout
router.post("/", async (req, res) => {
  // Handle the request
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    // send a error response back
    res.status(400).json({ error: error.message });
  }
});

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
