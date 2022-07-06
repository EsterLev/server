const fs = require('fs/promises');

//get all the json
async function getAllJson() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data;
}

async function login(id) {
    const data = await getAllJson();
    if (data.manger.id === parseInt(id))
        return data.manger;
    else {
        const user = data.users.find(u =>u.id === parseInt(id));
        return user;
    }
}

module.exports = {
    login
}