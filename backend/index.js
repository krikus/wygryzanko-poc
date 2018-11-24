const express = require('express');
const app = express();
const router = express.Router();
const socket = require('socket.io');
const server = require('http').Server(app);
const socketHandler = require('./src/socket');

router.use('/', (req, res, next) => {
  res.status(200).json({ ok: true });
});

app.use(router);
socketHandler(socket(server));

server.listen(4201);