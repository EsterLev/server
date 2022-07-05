const express = require('express');
const Users = require('../models/user.model');
const router = express.Router();

router.post('/', async (req, res) => {
//יצירת שרות חדש
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

//

router.get('/', (req, res) => {   
    const users = await Users.find();
    res.send(users);
});

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