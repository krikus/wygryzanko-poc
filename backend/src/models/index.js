const mongoose = require('mongoose');
const Content = require('./Content');

mongoose.connect('mongodb://mongo_poc/poc', { useNewUrlParser: true });

module.exports = {
  Content,
};