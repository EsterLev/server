const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs-extra');

const port = 8000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

const getUsers = () => {
    const users = require('./users.json');
    console.log('--- users: ' + JSON.stringify(users));
    return users;
}


let baseId =[...getUsers()].pop()?.id || 1;
const getId = () => ++baseId;

app.get('/users', (req, res) => {
  return res.send(getUsers());
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    return res.send(getUsers().find(t => t.id === parseInt(id)));
  });

  app.get('/users/:search', (req, res) => {
    const search = req.params.search;
    return res.send(getUsers().find(t => t.id === parseInt(id)));
  });

app.post('/users', async (req, res) => {
    const { first_name, last_name, address, phone, email, height, weight, managerDaily } = req.body;
    const newUser = {
        first_name,
        last_name, 
        address, 
        phone, 
        email, 
        height, 
        weight,
        managerDaily,
        id: getId(),
    };
    const users = getUsers();
    users.push(newUser);
    try {
        await fs.writeJson(__dirname + '/users.json', users);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send();
});

app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const users = getUsers();
    const index = users.findIndex(t => t.id === id);
    users.splice(index, 1);
    try {
        await fs.writeJson(__dirname + '/users.json', tasks);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send('success');
})

app.put('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const users = getUsers();
    const user = users.find(t => t.id === id);
    const { description, done } = req.body;
    if (description) {
        task.description = description;
    }
    if (typeof done !== 'undefined') {
        task.done = done;
    }
    try {
        await fs.writeJson(__dirname + '/tasks.json', tasks);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send('success');
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});