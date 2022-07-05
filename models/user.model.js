const { Schema, model } = require('mongoose');

const meetSchema = new Schema({
    first_name : { type: String },
    last_name : { type: String },
    address : { type: String },
    phone : { type: String },
    email  : { type: String },
    height : { type: Number },
    weight : { type: String },
    managerDaily : { type: String }
  });

const Meet = model('Meet', meetSchema);

module.exports = Meet;