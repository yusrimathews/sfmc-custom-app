const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors({
  origin: 'https://127.0.0.1:3000'
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
