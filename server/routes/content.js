const express = require('express');
const router = express.Router();
const Content = require('../models/content.model');

// @route   POST api/content
// @desc    Create a new content article
// @access  Public (for now)
router.post('/', async (req, res) => {
  try {
    const newContent = new Content({
      title: req.body.title,
      summary: req.body.summary,
      fullContent: req.body.fullContent,
      language: req.body.language,
    });

    const content = await newContent.save();
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/content
// @desc    Get all content
// @access  Public
router.get('/', async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
