const fs = require('fs/promises');
const uuid = require('uuid');
const uuidv4 = uuid.v4;
// const fsPromises = require('fs').promises;

//get all users
// async function getUsers() {
//     const dataFile = await fs.readFile('./users.json');
//     let data = JSON.parse(dataFile);
//     return data.users;
// }

const getUsers = async () => fs.readFile('./users.json').then(data => JSON.parse(data)).users;


//get all the json
// async function getAllJson() {
//     const dataFile = await fs.readFile('./users.json');
//     let data = JSON.parse(dataFile);
//     return data;
// }
const getAllJson = async () => fs.readFile('./users.json').then(data => JSON.parse(data));


//update json
const updateJson = async (user) => fs.writeFile('./users.json', JSON.stringify(user));


async function getUserById(id) {
    const users =await getUsers();
    const user =await users.find(u => u.id === parseInt(id));
    return user;
}


async function addUser(firstName, lastName, city, street, number, phone, email, height, weight) {
    const Id = uuidv4();
    let obj = {
        firstName: firstName, lastName: lastName, address: {
            city: city, street: street,
            number: number
        }, phone: phone, email: email, height: height,
        weight: { start: weight, meetings: [] }, diary: [], 
        id : Id
    };
    let user = JSON.stringify(obj, null, 2);
    await fs.writeFile('./users.json', user, err => { console.log(err) });
    message: { user }
}

async function findByIdAndDelete(id){
    const data = await getAllJson();
    const index =await data.users.findIndex(u => u.id === parseInt(id));
    data.users.splice(index, 1);
    try {
        await updateJson(data);
        return 'success!'
    } catch (err) {
        console.error(err)
        return 'faild'
    }
}

const updateUser = async (id, user) => {
    const data = await getAllJson();
    const _user = await data.users.find(u => u.id === parseInt(id));
    Object.assign(_user, user);
    await updateData(data);
    return _user;
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    findByIdAndDelete, 
    updateUser
}