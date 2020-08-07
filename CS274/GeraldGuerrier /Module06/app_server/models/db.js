const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://gguerrier:Chicago1994@cluster0.u2kkf.mongodb.net/Loc8r?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
 console.log(`Mongoose connected to ${err}`);
});
mongoose.connection.on('disconnected', () => {
 console.log('Mongoose disconnected');
});
require('./locations');

