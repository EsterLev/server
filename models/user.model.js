const { Schema, model, default: mongoose } = require('mongoose');
// import { meetings } from './meetings.model';
// import { daily  } from './daily.model';

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: Object() },
  phone: { type: String },
  email: { type: String },
  height: { type: Number },
  meetings: { type: Array},
  managerDaily: { type: Array }
});

const User = model('User', userSchema);

module.exports = User;
