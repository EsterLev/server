const express = require('express');
const fs = require('fs/promises');
// const fsPromises = require('fs').promises;
const router = express.Router();
//fsPromises.readFile('../users.json', 'utf8');
const { login } = require('../services/login.service');


router.post('/', async (req, res) => {
    try {
        if (req.body) {
            const { email, phone } = req.body;
            const succsess = await login(email, phone);
            res.send(succsess);
        }
    } catch (err) {
        console.error(err)
    }
});

module.exports = router;