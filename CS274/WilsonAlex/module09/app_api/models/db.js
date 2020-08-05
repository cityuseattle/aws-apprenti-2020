const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
  mongoose.connection.on('err', err => {
        console.log('Mongoose connection err:', err);
  });
  mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
  });

require('./locations');

