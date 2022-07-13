const { Schema, model } = require('mongoose');

const meetSchema = new Schema({
    date: { type: Date },
    weight: { type: number },
    id: { type: number }
});

const Meet = model('Meet', meetSchema);

module.exports = Meet;