const fs = require('fs/promises');
const uuid = require('uuid');
const uuidv4 = uuid.v4;

//get all users
async function getMeetings() {
    const data = await getAllJson();
    return data.users.meeting;
}



//get all the json
async function getAllJson() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data;
}
// const getAllJson = async () => fs.readFile('./users.json').then(data => JSON.parse(data));


//update json
const updateJson = async (user) => fs.writeFile('./users.json', JSON.stringify(user));


async function getUserById(id) {
    const users =await getUsers();
    const user =await users.find(u => u.id === parseInt(id));
    return user;
}


async function addMeeting(user) {
        if (!user.meeting.date || !user.meeting.weight ) {
            throw new Error('meeting must include date and weight');
        }
        const users = await getMeetings();
        user.id = users[users.length-1].id+1;
        const data = await getAllJson() || [];
        const exists = data.users.find(u => u.meeting.date === user.meeting.date && u.meeting.weight === user.meeting.weight);
        if (exists) {
            throw new Error('meeting already exist');
        }
        data.users.meetings.push(meeting);
        await updateJson(data);
        return user.meetings;
    }

async function findByIdAndDelete(id){
    const data = await getAllJson();
    const index =await data.users.meetings.findIndex(u => u.id === parseInt(id));
    data.users.meetings.splice(index, 1);
    try {
        await updateJson(data);
        return 'success!'
    } catch (err) {
        console.error(err)
        return 'faild'
    }
}

const updateMeeting = async (id, user) => {
    const data = await getAllJson();
    const _user = await data.users.find(u => u.id === parseInt(id));
    //search meeting in a user
    const _meeting = await _user.meetings.find(m => m.date===parseInt(date))
    Object.assign(_user, user);
    Object.assign(_meeting );
    await updateJson(data);
    return _user;
}

module.exports = {
    getMeetings,
    getAllJson,
    getUserById,
    findByIdAndDelete, 
    addMeeting,
    updateMeeting
}