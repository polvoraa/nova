const mongoose = require("mongoose")

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

  image: {
    type: String,
    required: true
  },

  category: {
    type: String,
    trim: true
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

})

// índice para ordenar mais rápido
ProjectSchema.index({ createdAt: -1 })

module.exports = mongoose.model("Project", ProjectSchema)