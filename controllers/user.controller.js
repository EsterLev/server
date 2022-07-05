// const express = require('express');
// const Users = require('../services/user.service');
// const router = express.Router();

// router.post('/', async (req, res) => {
//     const newUser = req.body; 
//     try {
//         await Users.addUser(
//             first_name = newUser.first_name,
//             last_name = newUser.last_name,
//             address = newUser.address,
//             phone = newUser.phone,
//             email  = newUser.email, 
//             height = newUser.height,
//             weight = newUser.weight,
//             managerDaily = newUser.managerDaily
//         );
//     } catch (err) {
//         console.error(err)
//     }
//     res.send();
// });

// //

// router.get('/',async (req, res) => {   
//     const users = await Users.find();
//     res.send(users);
// });

// router.put('/:id', async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {
//         Users.findByIdAndUpdate(id,req.body);
//         console.log('success!');
//     } catch (err) {
//         console.error(err);
//     }
//     res.send();
// });

// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         Users.findByIdAndDelete(id);
//         console.log('success!')
//     } catch (err) {
//         console.error(err)
//     }
//     res.send();
// })

const express = require('express');
const fs = require('fs/promises');
// const fsPromises = require('fs').promises;
const router = express.Router();
//fsPromises.readFile('../users.json', 'utf8');
const { getUserById, getUsers, addUser } = require('../services/user.service');


router.post('/', async (req, res) => {
    const newUser = req.body;
    try {
        await addUser(newUser.firstName, newUser.lastName, newUser.city, newUser.street, newUser.number, newUser.phone, newUser.email, newUser.height, newUser.weight);
        message: { 'success create newUser' }
    }
    catch (err) {
        console.error(err);
    }
    res.send();

    // const newUser = req.body; 
    // try {
    //     await Users.addUser(
    //         first_name = newUser.first_name,
    //         last_name = newUser.last_name,
    //         address = newUser.address,
    //         phone = newUser.phone,
    //         email  = newUser.email, 
    //         height = newUser.height,
    //         weight = newUser.weight,
    //         managerDaily = newUser.managerDaily
    //     );
    // } catch (err) {
    //     console.error(err)
    // }
    // res.send();
});



// GET /user/:id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await getUserById(id);
        console.log("user " + user);
    }
    catch (error) {
        next(error);
    }
    res.send(user);
});

router.get('/', async (req, res, next) => {
    let users;
    try {
        users = await getUsers();
    }
    catch (error) {
        next(error);
    }
    res.send(users);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        Users.findByIdAndDelete(id);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send();
})

module.exports = router;


