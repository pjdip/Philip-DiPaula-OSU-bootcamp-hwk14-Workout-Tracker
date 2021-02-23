// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* const Exercise = require("./Exercise");
const ExerciseSchema = Exercise.Schema; */

// Define Workout Schema
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now()
        },
        exercises: [
            // putting exercise schema directly inside
            {
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
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// Virtual calculating total duration
WorkoutSchema
    .virtual("totalDuration")
    .get(function() {
        return this.exercises.reduce((totalDur, exercise) => {
            return totalDur + exercise.duration
        }, 0);
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// had issue getting it to work with this syntax
/*         {
                type: Schema.Types.ObjectId,
                ref: "Exercise"
            } */
/*             { type: ExerciseSchema } */