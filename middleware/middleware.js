// const jwt = require('jsonwebtoken');

// const authMiddleware = async (req, res, next) => {
//     const token =
//     req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization'].split(' ').pop();

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     // TODO: check it payload is valid - belongs to existing user & didnt expired
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// }
// module.exports = authMiddleware;


// const express = require('express');
// const app = express();
// const { auth } = require('express-oauth2-jwt-bearer');

// // Authorization middleware. When used, the Access Token must
// // exist and be verified against the Auth0 JSON Web Key Set.
// const checkJwt = auth({
//   audience: 'YOUR_API_IDENTIFIER',
//   issuerBaseURL: `https://localhost:3000/`,
// });


// module.exports = checkJwt;


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'g43FTcTXYTXoivfU2DTyzmcaUaEw6t9H',
  issuerBaseURL: 'https://dev-izlo-xu0.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
module.exports = config;
