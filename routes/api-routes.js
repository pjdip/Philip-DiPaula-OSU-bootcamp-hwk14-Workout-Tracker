// Dependencies
const db = require("../models");
const express = require("express");
const router = express.Router();

// Get Workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"   
                }
            }    
        }
    ])
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
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"   
                }
            }
        },
        // reverse in order to grab most recent 7
        {
            $sort: {
                day: -1
            }
        },
        {
            $limit: 7
        },
        {
            $sort: {
                day: 1
            }
        }
    ])
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});

// Export the router
module.exports = router;


//reject put route code from trying with different syntax
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