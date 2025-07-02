const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
  },
  fullContent: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ['English', 'Kiswahili'],
    default: 'English',
  },
}, { timestamps: true });

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
