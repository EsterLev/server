const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  meals: { type: Array() },
  date: { type: Date },
  id: { type: Number }
});

const Meet = model('Meet', userSchema);

module.exports = Meet;