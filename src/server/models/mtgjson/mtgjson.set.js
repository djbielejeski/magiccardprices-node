var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  baseSetSize: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  isFoilOnly: {
    type: Boolean,
  },
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date
  },
  totalSetSize: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  }
});

module.exports = mongoose.model('mtgjsonSet', schema, 'mtgjsonSet');
