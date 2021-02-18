// Import Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Workout Schema
const WorkoutSchema = new Schema({
/*     name: {
        type: String,
        trim: true,
        unique: true
    }, */
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;