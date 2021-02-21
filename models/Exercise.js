// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Exercise Schema
const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
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

module.exports = Exercise;