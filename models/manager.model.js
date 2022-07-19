const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
  password:{type: String}
});

const Manager = model('Manager', managerSchema);

module.exports = Manager;