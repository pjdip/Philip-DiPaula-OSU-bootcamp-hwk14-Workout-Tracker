const db = require("../models");
const express = require("express");
const router = express.Router();

// Get Last Workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => res.json(err));
});

// Create New Workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => res.json(err));
});