const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.lsik3.mongodb.net/Locker8?retryWrites=true&w=majority', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to altas`);
});
mongoose.connection.on('eerror', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('MOngoose disconnected');
});

require('./location')