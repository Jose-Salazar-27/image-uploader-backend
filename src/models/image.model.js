const mongoose = require('mongoose');

const ImageModel = new mongoose.Schema({
  author: String,
  url: String,
});

module.exports = mongoose.model('Image', ImageModel);
