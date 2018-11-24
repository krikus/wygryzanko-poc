const handler = require('./handler');
const { Content } = require('../models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('hello', { 'fake': 'object' })
    handler.echo(socket);
    handler.content(socket);
  });

  Content.watch()
    .on('change', (data) => {
      console.log('change stream!', data);
    })
  ;
};