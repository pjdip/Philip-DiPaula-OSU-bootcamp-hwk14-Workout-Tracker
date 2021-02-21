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
    db.Exercise.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate(
            params.id,
            { $push: { exercises: _id }},
            { new: true }
        ))
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