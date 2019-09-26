var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  pricesDate: {
    type: Date,
    required: true,
  },
  version: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('mtgjsonVersion', schema, 'mtgjsonVersion');
