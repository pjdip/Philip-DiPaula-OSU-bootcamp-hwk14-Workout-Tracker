// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise");

// Define Workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
/*         {
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
        } */
/*         {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        } */
        { type: Exercise.Schema }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;