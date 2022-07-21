const fs = require('fs/promises');
// const { get } = require('http');
// const uuid = require('uuid');
// const uuidv4 = uuid.v4;
const User = require('../models/user.model');
const { ObjectId } = require('mongodb');

//get all users
async function getUsers() {
    // const data = await getAllJson();
    // return data.users;
    const users = await User.find();
    return users;
    console.log('getting all users')
}

//get all the json
// async function getAllJson() {
//     const dataFile = await fs.readFile('./users.json');
//     let data = JSON.parse(dataFile);
//     return data;
// }

//update json
// const updateJson = async (user) => fs.writeFile('./users.json', JSON.stringify(user));


// async function getUserById(id) {
//     // const users = await getUsers();
//     // const user = await users.find(u => u.id === parseInt(id));
//     // return user;
//     const user = await User.findOne({ _id: ObjectId(id) });
//     return user;
// }

const getUserById = async (id) => {
    const user = await User.findOne({ _id: ObjectId(id) });
    console.log('get user by id is works!')
    // console.log(user);
    return user;
}


// async function addUser(firstName, lastName, city, street, number, phone, email, height, weight) {
//     const Id = uuidv4();
//     let obj = {
//         firstName: firstName, lastName: lastName, address: {
//             city: city, street: street,
//             number: number
//         }, phone: phone, email: email, height: height,
//         weight: { start: weight, meetings: [] }, diary: [], 
//         id : Id
//     };
//     let user = JSON.stringify(obj, null, 2);
//     console.log(user);
//     const data = await getAllJson();
//     data.users.push(user);
//     console.log(data);
//     updateJson(data);
//     message: { user }
// }

async function addUser(user) {
    await User.create(user);
    // if (!user.firstName || !user.lastName) {
    //     throw new Error('user must include your full name');
    // }
    // const users = await getUsers();
    // user.id = users[users.length - 1].id + 1;
    // const data = await getAllJson() || [];
    // const exists = data.users.find(u => u.phone === user.phone && u.email === user.email);
    // if (exists) {
    //     throw new Error('user with email and phone already exists');
    // }
    // data.users.push(user);
    // await updateJson(data);
    // return user;
}

async function findByIdAndDelete(id) {
    await User.findByIdAndDelete(id);
    // const data = await getAllJson();
    // const index = await data.users.findIndex(u => u.id === parseInt(id));
    // data.users.splice(index, 1);
    // try {
    //     await updateJson(data);
    //     return 'success!'
    // } catch (err) {
    //     console.error(err)
    //     return 'faild'
    // }
}

const updateUser = async (id, user) => {
    await User.findByIdAndUpdate(id, user);
    console.log('update user is works')
    // const data = await getAllJson();
    // const _user = await data.users.find(u => u.id === parseInt(id));
    // Object.assign(_user, user);
    // await updateJson(data);
    // return _user;
}

//searches//
const byWeightFunc = (arr, min, max) => {
    const ans = arr.filter(f => (f.weight.start > min) && (f.weight.start < max));
    console.log(ans);
    return ans;
}
const byProcessFunc = (arr) => {
    console.log('byProcessFunc');
    const ans = arr.filter(f => f.weight.start > (f.weight.meetings[f.weight.meetings.length - 1].weight));
    console.log(ans);
    return ans;
}
const byBMIFunc = (arr, bmiMin, bmiMax) => {
    const ans = arr.filter(f => (f.weight.start / (f.height * f.height) > bmiMin) &&
        (f.weight.start / (f.height * f.height) < bmiMax));
    return ans;
}
const byCityFunc = (arr, city) => {
    const ans = arr.filter(f => f.address.city === city);
    return ans;
}
const searchFunc = (arr, inputToSearch) => {
    console.log(inputToSearch);
    const ans = arr.filter(user => user.id === inputToSearch ||
        user.firstName === inputToSearch || user.lastName === inputToSearch ||
        user.address.city === inputToSearch || user.address.street === inputToSearch ||
        user.phone === inputToSearch ||
        user.email === inputToSearch || user.height === inputToSearch);
    console.log(ans);
    return ans;
}

const getBySearch = async (searches) => {
    console.log(searches);
    let currentUsers = [];
    let boolSearch = [false, false, false, false];
    if (searches[0] != '')
        boolSearch[0] = true;
    if (searches[1] != '')
        boolSearch[1] = true;
    if (searches[3] != '')
        boolSearch[2] = true;
    if (searches[5] != '')
        boolSearch[3] = true;
    for (let i = 0; i < boolSearch.length; i++) {
        if (boolSearch[i]) {
            switch (i) {
                case 0: if (searches[0] != '') {
                    currentUsers = User.find({
                        $or: [{ "firstName": searches[0] }, { "lastName": searches[0] },
                        { "address.city": searches[0] }, { "address.street": searches[0] },
                        { "phone": searches[0] }, { "email": searches[0] }, { "height": searches[0] }]
                    });
                }
                    break;
                case 1: if (searches[1] != '' && searches[2] != '') {
                    currentUsers = byWeightFunc(currentUsers, parseInt(searches[1]), parseInt(searches[2]));
                }
                    break;
                case 2: if (searches[3] != '' && searches[4] != '') {
                    currentUsers = byBMIFunc(currentUsers, parseInt(searches[3]), parseInt(searches[4]));
                }
                    break;
                case 3: if (searches[5] != '') {
                    // currentUsers = byCityFunc(currentUsers, searches[5]);
                    // console.log(currentUsers);
                    currentUsers = await User.find({ "address.city": searches[5] });
                }
                    break;
            }
        }
    }
    return currentUsers;
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    findByIdAndDelete,
    updateUser,
    byWeightFunc,
    byProcessFunc,
    byBMIFunc,
    byCityFunc,
    searchFunc,
    getBySearch
}