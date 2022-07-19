const fs = require('fs/promises');
const User = require('../models/user.model');
const Manager = require('../models/manager.model');

const { ObjectId } = require('mongodb');

//get all the json
// async function getAllJson() {
//     const dataFile = await fs.readFile('./users.json');
//     let data = JSON.parse(dataFile);
//     return data;
// }

async function login(email, phone) {
   // const data = await getAllJson();
    // const user = await data.users.find(u => u.email === email && u.phone === phone);
    // if (user)
    //     return user;
    // else {
    //     if (data.manager.email === email && data.manager.phone === phone)
    //         return data.manager;
    // }
    console.log('in login process')
    // const user = await User.findOne({u => u.email === email && u.phone === phone});
    const user = await User.findOne({ email: email, phone: phone });
    if(user!==undefined)
    return user;
    console.log('return user')
    // const manager = await Manager.findOne({u => u.email === email && u.phone === phone});
    const manager = await Manager.findOne({ email: email, phone: phone });
    if(manager!==undefined)
    return manager;
    console.log('return manager')
}

module.exports = {
    login
}