const fs = require('fs/promises');
const Daily = require('../models/daily.model');
const User = require('../models/user.model');
const { ObjectId } = require('mongodb');

//get daily by user
async function getDaily(id) {
    // const data = await getAllJson();
    // const user = await data.users.find(u => u.id === parseInt(id));
    // return user.managerDaily;
    const user = await User.findOne({ _id: ObjectId(id) });
    return user.managerDaily;
}



//get all the json
// async function getAllJson() {
//     const dataFile = await fs.readFile('./users.json');
//     let data = JSON.parse(dataFile);
//     return data;
// }

//update json
// const updateJson = async (data) => fs.writeFile('./users.json', JSON.stringify(data));

async function addDaily(id, d) {
    // let daily = await getDaily(id);
    // d.id = daily[daily.length - 1].id + 1;
    // daily.push(d);
    // const data = await getAllJson() || [];
    // data.users.forEach(u => {
    //     if (u.id === parseInt(id)) {
    //         u.managerDaily = daily;
    //     }
    // });
    // await updateJson(data);
    // return daily;

    await Daily.create(id, d);

}

async function findByIdAndDelete(idu, idd) {
    //const data = await getAllJson();
   // const daily = await getDaily(idu);
    // const indexDaily = await daily.findIndex(u => u.id === parseInt(idd));
    // daily.splice(indexDaily, 1);
    // data.users.forEach(u => {
    //     if (u.id === parseInt(idu)) {
    //         u.managerDaily = daily;
    //     }
    // })
    // try {
    //     await updateJson(data);
    //     return 'success!'
    // } catch (err) {
    //     console.error(err)
    //     return 'faild'
    // }
    await Daily.findByIdAndDelete(idu, idd);

}

const updateDaily = async (idu, idd, daily) => {
    // const data = await getAllJson();
    //const theDairy = await getDaily(idu);
    // theDairy.forEach(d => {
    //     if (d.id === parseInt(idd)) {
    //         Object.assign(d, daily);
    //     }
    // })
    // data.users.forEach(u => {
    //     if (u.id === parseInt(idd)) {
    //         u.managerDaily = theDairy;
    //     }
    // })
    // await updateJson(data);
    // return theDairy;
    await Daily.findByIdAndUpdate(idu, idd, updates);
}

// async function updeteDairiesById(id, dairy) {
//     console.log(dairy);
//      const updateUser = await userModel.updateOne({ _id: ObjectId(id) }, dairy);
//     return dairy;
//   }

module.exports = {
    getDaily,
    addDaily,
    findByIdAndDelete,
    updateDaily
}