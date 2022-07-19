const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost:${process.env.HOST  || 27017}/${process.env.DB || weightWatchers}');
}

module.exports = {
    connect,
}