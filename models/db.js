const mongoose = require("mongoose");
// require('dotenv').config();
class MongooseDB {
  constructor() {
  }
  async connect() {
    const url = `mongodb://localhost:${process.env.PORT || 27017}/${process.env.DB || "weightWatchers"}`;
    console.log(url);
    await mongoose.connect(url);
    console.log(`mongoose DB connected!`);
  }
}
module.exports = new MongooseDB();


