// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Exercise Schema
const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
    },
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;