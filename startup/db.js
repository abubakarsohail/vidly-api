const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}