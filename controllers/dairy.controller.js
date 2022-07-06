const express = require('express');
const fs = require('fs/promises');
// const fsPromises = require('fs').promises;
const router = express.Router();
//fsPromises.readFile('../users.json', 'utf8');
const { getUserById, getUsers, addUser, findByIdAndDelete, updateUser } = require('../services/users.service');


router.post('/', async (req, res) => {
    const { firstName, lastName, address, phone, email, height, weight, managerDaily } = req.body;
    let user;
    try {
        user =  await addUser(
            firstName,
            lastName,
            address,
            phone,
            email,
            height,
            weight,
            managerDaily
        );
    } catch (err) {
        console.error(err)
    }
    res.send(user);
    try {
        const user = req.body.user;
        const newUser = await addUser(user);
        res.send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



// GET /users/:id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await getUserById(id);
        if (user === undefined)
            res.send('not found user with id ' + id);
    }
    catch (error) {
        next(error);
    }
    res.send(user);
});


//by filter
//????
router.get('/:search', async (req, res, next) => {
    const search = req.params.id;
    let user;
    try {
        user = await getUserById(id);
        if (user === undefined)
            res.send('not found user with id ' + id);
    }
    catch (error) {
        next(error);
    }
    res.send(user);
});

// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     const user = await UserService.getUser(id);
//     res.send(user);
// })

router.get('/', async (req, res, next) => {
    let users;
    try {
        users = await getUsers();
        console.log(users);
    }
    catch (error) {
        next(error);
    }
    res.send(users);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const ans = await findByIdAndDelete(id);
        res.send(ans);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    const updatedUser = await updateUser(id, user);
    res.send(updatedUser);
})
module.exports = router;