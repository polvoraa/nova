const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    enum: ['image', 'video', 'pdf'],
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  link: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

ProjectSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Project", ProjectSchema);