// Dependencies
const db = require("../models");
const express = require("express");
const router = express.Router();

// Get Workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});

// Create New Workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(newWorkout => res.json(newWorkout))
    .catch(err => res.json(err));
});

// Add Exercise to Workout with provided id
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body }},
        { new: true, useFindAndModify: false }
    )
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

// Get Workout Range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(7)
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});

// Export the router
module.exports = router;


//reject put route code
/*     db.Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true, useFindAndModify: false }
    ) */
/*     db.Exercise.create(body)
        .then(({ _id }) => {
            console.log(params.id)
            console.log("b: " + _id);
            db.Workout.findByIdAndUpdate(
                params.id,
                { $push: { exercises: _id }},
                { new: true, useFindAndModify: false }
            )
            .populate("exercises");
        }) */