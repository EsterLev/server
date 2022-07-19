const { Schema, model } = require('mongoose');

const dailySchema = new Schema({
  meals: { type: Array() },
  date: { type: Date },
  id: { type: Number }
});

const Daily = model('Daily', dailySchema);

module.exports = Daily;