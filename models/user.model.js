const { Schema, model } = require('mongoose');
import { meetings } from './meetings.model';
import { daily  } from './daily.model';

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  height: { type: Number },
  meetings: { type: meetings },
  managerDaily: { type: daily }
});

const Meet = model('Meet', userSchema);

module.exports = Meet;
