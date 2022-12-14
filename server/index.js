const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

const app = express();

require('dotenv').config();

app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(helmet({
  frameguard: false
}));
app.use(express.json());

const login = require('./endpoints/login');
const logout = require('./endpoints/logout');
const token = require('./endpoints/token');
const user = require('./endpoints/user');

app.get('/login/:instance/:client_id', login);
app.get('/logout', logout);
app.post('/token/:instance', token);
app.get('/user/:instance', user);

var server;
var port = process.env.PORT;

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
