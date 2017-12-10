const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true });
mongoose.connection
.once('open', () => {})
.on('error', (error) => console.warn('Warning', error));