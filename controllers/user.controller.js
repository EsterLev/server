const { Router } = require('express');
const UserService = require('../services/user.service');

const router = Router();

router.post('/signup', async (req, res) => {
    // here need also to generate a jwt and returns it in response
});

router.post('/', async (req, res) => {
//create new user
    const newUser = req.body; 
    try {
        await Users.create(
            first_name = newUser.first_name,
            last_name = newUser.last_name,
            address = newUser.address,
            phone = newUser.phone,
            email  = newUser.email, 
            height = newUser.height,
            weight = newUser.weight,
            managerDaily = newUser.managerDaily
        );
    } catch (err) {
        console.error(err)
    }
    res.send();
});

//get all users
router.get('/', (req, res) => {   
    const users = await Users.find();
    res.send(users);
});

//get user by id
router.get('/', (req, res) => {   
    const id = parseInt(req.params.id);
    try {
        Users.findById(id,req.body);
        console.log('success!');
    } catch (err) {
        console.error(err);
    }
    res.send();
});

//update user
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        Users.findByIdAndUpdate(id,req.body);
        console.log('success!');
    } catch (err) {
        console.error(err);
    }
    res.send();
});

//delete user
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


// const express = require('express');
// const Users = require('../models/user.model');
// const router = express.Router();

