const MeetingModel = require('../models/meeting.model');

const getMeetingOfUser = (user) => MeetingModel.findOne({ user });

module.exports = {
    getMeetingOfUser,
}

//please continue work hupsent a lot of functions! :shoshi zada