const fs = require('fs/promises');
// const fsPromises = require('fs').promises;

async function getUsers() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data.users;
}

async function getUserById(id) {
    const users =await getUsers();
    const user =await users.find(u => u.id === parseInt(id));
    return user;
}

// let baseId =[...getUsers()].pop()?.id || 1;
// const getId = () => ++baseId;

async function addUser(firstName, lastName, city, street, number, phone, email, height, weight) {
    let obj = {
        firstName: firstName, lastName: lastName, address: {
            city: city, street: street,
            number: number
        }, phone: phone, email: email, height: height,
        weight: { start: weight, meetings: [] }, diary: [], 
        // id:getId()
    };
    let user = JSON.stringify(obj, null, 2);
    await fs.writeFile('./users.json', user, err => { console.log(err) });
    message: { user }
}

async function findByIdAndDelete(id){
    const users = await getUsers();
    const index =await users.findIndex(u => u.id === parseInt(id));
    users.splice(index, 1);
    try {
        // await fs.writeFile('../users.json', users, err => { console.log(err) });
        await fs.writeJson(__dirname + '/users.json', users);
        return 'success!'
    } catch (err) {
        console.error(err)
        return 'faild'
    }
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    findByIdAndDelete
}