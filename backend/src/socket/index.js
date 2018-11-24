const handler = require('./handler');
const { Content } = require('../models');

const sendList = (emitter) => {
  Content
    .find()
    .lean()
    .then(data => emitter.emit('contents', data))
  ;
}

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('hello', { 'fake': 'object' })
    handler.echo(socket);
    handler.content(socket, io, sendList);
    sendList(socket);
  });
};