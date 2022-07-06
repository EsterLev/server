const express  = require('express');
const path = require('path');

const app = express();

const UserController = require('./controllers/user.controller');

const PORT = process.env.PORT || 5000;

// app.get('/users', (req, res)=>{
//     res.send(users);
// })


app.use('/users', UserController);

// app.get('/', (req, res)=>{})

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
