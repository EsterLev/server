// const UserModel = require('../models/user.model');
// const fs = require('fs');
// const dataFromFile = fs.readFileSync('./users.json');

// let data = JSON.parse(dataFromFile);

// const addUser = async (firstname, lastname, address, phone, email, height, weight, managerDaily) => {
//     const existingUser = await UserModel.findOne({
//         email:email,
//         phone:phone
//     });
//     if (existingUser) {
//         throw new Error('user already exists');
//     } else {
//         const newUser = await UserModel.create({
//             firstname:firstname,
//             lastname:lastname,
//             address:address,
//             phone:phone,
//             email:email,
//             height:height,
//             weight:weight,
//             managerDaily:managerDaily
//         });
//         return newUser;
//     }
// };

// const getAllUser = async()=>{
//     return await data.users;
// }

// const getUserById = async(id)=>{
//     return await data.users.find(u=>u.id===id);
// }

// const getUserBySearch = async(search)=>{
//     return await data.users.find(u=>u.id===search || u.firstname===search || u.lastname===search || u.address === search);
// }

// const findByIdAndUpdate = async(id, )=>{
//     const user = data.users.find(u=>u.id===id);
    
// }

// module.exports = {
//     addUser,
//     getAllUser,
//     getUserById,
//     getUserBySearch,
//     findByIdAndUpdate
// }

const fs = require('fs/promises');
// const fsPromises = require('fs').promises;

async function getUsers() {
    const dataFile = await fs.readFile('../users.json');
    let data = JSON.parse(dataFile);
    return data;
}

async function getUserById(id) {
    const data = await fs.readFile('../users.json');
    console.log(data);
    // const users = JSON.parse(data).users;
    // console.log(users);
    const user = data.find(user => user.id === id);
    console.log(user);
    return user;
}
let baseId =[...getTasks()].pop()?.id || 1;
const getId = () => ++baseId;

async function addUser(firstName, lastName, city, street, number, phone, email, height, weight) {
    let obj = {
        firstName: firstName, lastName: lastName, address: {
            city: city, street: street,
            number: number
        }, phone: phone, email: email, height: height,
        weight: { start: weight, meetings: [] }, diary: [], id:getId()
    };
    let user = JSON.stringify(obj, null, 2);
    await fs.writeFile('../users.json', user, err => { console.log(err) });
    message: { user }
}

async function findByIdAndDelete(id){
    const users = getUsers();
    const index = users.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    try {
        await fs.writeJson(__dirname + '/users.json', users);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send('success');
    
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    findByIdAndDelete
}

    // .then(function (result) {
    //     console.log("getUserById");
    //     console.log(result);
    //     const users = JSON.parse(result).users;
    //     const user = users.find(user => user.id === id);
    //     return user;
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })