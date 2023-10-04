const Workout = require("../models/workoutModel.js");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  //sort from newest to oldest
  const workouts = await Workout.find({}).sort({ createdAT: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
  // get the id of the workout
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  // find the workout corresponding to the id
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout doesn't exist" });
  }

  // send the workout corresponding to the id
  res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  //! For better error messages
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Fill in all the required fields", emptyFields });
  }
  //! ================================================================

  // try to create a new workout (add to the DB)
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    // send a error response back
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  // get the id of the workout
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(404).json({ error: "Workout not found" });
  }

  res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
  // get the id of the workout
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // learn more about javascript ellipsis
    }
  );

  if (!workout) {
    res.status(404).json({ error: "Workout not found" });
  }

  res.status(200).json(workout);
};

// export the functions
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
