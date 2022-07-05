const express = require('express');
const app = express();
const cors = require('cors');
// const connection = require('./config/db');
const userController = require('./controllers/user.controller');
const meetingController = require('./controllers/meeting.controller');
const authMiddleware = require('./middleware/middleware');
const port = 3000

// connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', userController);
app.use('/meeting', authMiddleware, meetingController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})