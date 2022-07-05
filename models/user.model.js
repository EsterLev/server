// const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
});

const User = model('User', userSchema);

module.exports = User;

// const meetSchema = new Schema({
//     first_name : { type: String },
//     last_name : { type: String },
//     address : { type: String },
//     phone : { type: String },
//     email  : { type: String },
//     height : { type: Number },
//     weight : { type: String },
//     managerDaily : { type: String }
//   });

// // const Meet = mongoose.model('Meet', meetSchema);

// module.exports = meetSchema;