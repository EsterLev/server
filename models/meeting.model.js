const { Schema, model } = require('mongoose');

const meetingSchema = new Schema({
    date:Date,
    meals:[]
});

const BusinessModel = model('Business', meetingSchema);

module.exports = BusinessModel;