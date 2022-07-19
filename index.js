const express = require('express');
const app = express();
const cors = require('cors');
const userController = require('./controllers/user.controller');
const dailyController = require('./controllers/daily.controller');
const loginController = require('./controllers/login.controller');
const meetingController = require('./controllers/meeting.controller');

const authMiddleware = require('./middleware/middleware');
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', userController);
app.use('/daily', dailyController);
app.use('/login', loginController);
app.use('/meeting', meetingController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
