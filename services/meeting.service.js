const fs = require('fs/promises');
const Meetings = require('../models/meetings.model');
const { ObjectId } = require('mongodb');
const User = require('../models/user.model');


// const getData = async () => fs.readFile('./users.json').then(data => JSON.parse(data));
// const updateData = async (data) => fs.writeFile('./users.json', JSON.stringify(data));

const addUserMeeting = async (id, meeting) => {
    // const data = await getData();
    // const users = data.users || [];
    // const _user = await users.find(user => user.id === parseInt(id));
    // console.log(_user);
    // const idmeeting = uuidv4();
    // if (_user) {
    //     const meetings = _user.meeting;
    //     console.log("befor" + meetings);
    //     const newMeeting = {
    //         date: updates.date, weight: updates.weight,
    //         comments: updates.comments, visit: updates.visit, idmeeting: idmeeting
    //     };
    //     meetings.push(newMeeting);
    //     console.log("after" + meetings);
    //     _user.meeting = meeting;
    // }
    // const AllData = { 'manager': data.manager, 'users': users };
    // await updateData(AllData);
    await Meetings.create(id, meeting);

}

const getMeetings = async () => {
    // const data = await getData();
    const users = await User.find();
    const allMeetings = [];
    users.forEach(element => {
        element.meeting.forEach(m => {
            allMeetings.push(m);
        })
    });
    console.log("all meetings " + allMeetings);
    return allMeetings;


}

const getMeetingsByUserId = async (id) => {
    const user = await User.findOne({ _id: ObjectId(id) });
    const meetings = user.meeting;
    return meetings;
}

const getMeetingsById = async (id, allMeetings) => {
    console.log(id);
    const allMeeting = allMeetings;
    const meeting = allMeeting.find(m => m.idmeeting === id)
    console.log(meeting);
    return meeting;
}

const updateMeeting = async (updates, id) => {
    // const data = await getData();
    // const users = data.users || [];
    // const allMeetings = [];
    // data.users.forEach(element => {
    //     element.weight.meetings.forEach(m => {
    //         allMeetings.push(m);
    //     })
    // });
    // const meeting = await getMeetingsById(id, allMeetings);
    // meeting.date = updates.date;
    // meeting.weight = updates.weight;
    // meeting.comments = updates.comments;
    // meeting.visit = updates.visit;
    // const AllData = { 'manager': data.manager, 'users': users };
    // await updateData(AllData);
    await Meetings.findByIdAndUpdate(id, updates);

}

const deleteMeeting = async (idUser, id) => {
    // const data = await getData();
    // const users = data.users || [];
    // const arrMeetings = await users.find(user => user.id === parseInt(idUser)).meeting;
    // console.log(arrMeetings);
    // const index = await arrMeetings.findIndex(m => m.idmeeting === id);
    // arrMeetings.splice(index, 1);
    // const AllData = { 'manager': data.manager, 'users': users };
    // await updateData(AllData);
    await Meetings.findByIdAndDelete(idUser, id);

}

module.exports = {
    addUserMeeting,
    getMeetings,
    getMeetingsByUserId,
    updateMeeting,
    getMeetingsById,
    deleteMeeting
}