const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURL = `mongodb://${host}/Loc8r`;
const readLine = require('readline');

const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log(`connected to ${dbURL}`);
});

mongoose.connection.on('error', err => {
  console.log('error: ' + err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});

require('./locations');

