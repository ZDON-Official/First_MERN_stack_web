const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
