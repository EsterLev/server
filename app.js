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
const dotenv = require('dotenv');
const { auth, requiresAuth } = require('express-openid-connect');
const port = process.env.PORT || 3000;
dotenv.config();
db.connect();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(auth(authMiddleware));
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
app.use('/users', requiresAuth(), userController);
app.use('/daily', requiresAuth(), dailyController);
app.use('/Mylogin', requiresAuth(), loginController);
app.use('/meeting', requiresAuth(), meetingController);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})