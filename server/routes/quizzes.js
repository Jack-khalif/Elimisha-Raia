const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz.model');

// @route   POST api/quizzes
// @desc    Create a new quiz question
// @access  Public (for now)
router.post('/', async (req, res) => {
  try {
    const newQuiz = new Quiz({
      question: req.body.question,
      options: req.body.options,
      correctAnswer: req.body.correctAnswer,
      language: req.body.language,
    });

    const quiz = await newQuiz.save();
    res.json(quiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/quizzes
// @desc    Get all quiz questions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
