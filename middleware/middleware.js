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