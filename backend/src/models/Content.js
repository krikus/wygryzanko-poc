const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: 'string',
  body: 'string'
}, {
  capped: 3,
});

const Content = mongoose.model('Content', schema);

module.exports = Content;