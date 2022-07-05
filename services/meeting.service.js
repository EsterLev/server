const MeetingModel = require('../models/meeting.model');

const getMeetingOfUser = (user) => MeetingModel.findOne({ user });

module.exports = {
    getMeetingOfUser,
}