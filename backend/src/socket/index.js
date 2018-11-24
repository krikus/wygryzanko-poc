module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('hello', { 'fake': 'object' })
    socket.on('echo', (msg) => {
      console.log('echo', msg);
      socket.emit('echo', msg);
    })
  })
};