const mongoose = require('mongoose');

const blogContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const BlogContent = mongoose.model('BlogContent', blogContentSchema);

module.exports = BlogContent;