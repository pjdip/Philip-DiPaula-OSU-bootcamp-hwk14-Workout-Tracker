// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Exercise Schema
const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Exercise Type is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Exercise Name is Required"
    },
    duration: {
        type: Number,
        required: "Exercise Duration (in minutes) is Required"
    },
    weight: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    distance: {
        type: Number,
        required: false
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = {Model: Exercise, Schema: ExerciseSchema};