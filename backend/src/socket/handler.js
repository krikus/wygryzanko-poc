const { Content } = require('../models')

module.exports = {
  echo: (socket) => {
    socket.on('echo', (msg) => {
      console.log('echo', msg);
      socket.emit('echo', msg);
    })
  },

  content: (socket, io, sendList) => {
    socket.on('content', ({ title, body }) => {
      const content = new Content({ title, body });
      content.save()
        .then(() => {
          const debug = { msg: 'saved', data: content.toObject() };
          socket.emit('debug', debug);
          console.log('debug', debug);
        })
        .then(() => sendList(io))
      ;
    });
  }
}