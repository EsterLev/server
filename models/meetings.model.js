const { Schema, model } = require('mongoose');

const meetSchema = new Schema({
    date: { type: Date },
    weight: { type: Number }
});

const Meet = model('Meet', meetSchema);

module.exports = Meet;