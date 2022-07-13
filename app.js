const express = require('express');
const app = express();
const cors = require('cors');
const userController = require('./controllers/user.controller');
const dailyController = require('./controllers/daily.controller');
const loginController = require('./controllers/login.controller');
const authMiddleware = require('./middleware/middleware');
const meetingController = require('./controllers/meeting.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const db = require('./models/db');
// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
const port = 3000;
db.connect();
// , {customCss}
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', userController);
app.use('/daily', dailyController);
app.use('/login', loginController);
app.use('/meeting', meetingController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



