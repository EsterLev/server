const express = require('express');
const fs = require('fs/promises');
// const fsPromises = require('fs').promises;
const router = express.Router();
//fsPromises.readFile('../users.json', 'utf8');
const { getDaily, addDaily, findByIdAndDelete, updateDaily} = require('../services/daily.service');


router.post('/:id', async (req, res) => {
    // const { managerDaily } = req.body;
    const id = req.params.id;
    let Daily;
    try {
        Daily =  await addDaily(
            id,
            req.body
        );
    } catch (err) {
        console.error(err)
    }
    res.send(Daily);
    // try {
    //     const user = req.body.user;
    //     const newUser = await addUser(user);
    //     res.send(newUser);
    // } catch (error) {
    //     res.status(500).send(error.message);
    // }
});



// GET /users/:id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await getDaily(id);
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

router.get('/:id', async (req, res, next) => {
    let diary;
    const id = req.params.id;
    try {
        dairy = await getDaily(id);
        console.log(dairy);
    }
    catch (error) {
        next(error);
    }
    res.send(dairy);
});

router.delete('/:idU/:idD', async (req, res) => {
    const userId= req.params.idU;
    const dairyId= req.params.idD;
    try {
        console.log(userId, dairyId);
        const ans = await findByIdAndDelete(userId, dairyId);
        res.send(ans);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

router.post('/:idU/:idD', async (req, res) => {
    const idu = req.params.idU;
    const idd = req.params.idD;
    const updatedUser = await updateDaily(idu, idd, req.body);
    res.send(updatedUser);
})
module.exports = router;