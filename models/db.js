const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/weightWatchers');
}

module.exports = {
    connect,
}