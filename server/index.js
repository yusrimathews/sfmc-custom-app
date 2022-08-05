const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(helmet({
  frameguard: false
}));

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", '*.exacttarget.com'],
    scriptSrc: ["'self'", '*.exacttarget.com'],
    objectSrc: ["'none'"],
    imgSrc: ["'self'", '*.exacttarget.com', "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    upgradeInsecureRequests: []
  }
}));

const login = require('./endpoints/login');
const logout = require('./endpoints/logout');
const token = require('./endpoints/token');
const user = require('./endpoints/user');

app.get('/login/:instance/:client_id', login);
app.get('/logout', logout);
app.post('/token/:instance', token);
app.get('/user/:instance', user);

var server;

if ( process.env.NODE_ENV !== 'development' ) {
  server = app;
} else {
  server = https.createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
  }, app);
}

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
