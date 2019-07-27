const mongoose = require('mongoose');

module.exports = () => {
	mongoose.connect('mongodb://movie_user:abcd1234@ds255857.mlab.com:55857/heroku_t5bch9rr', { useNewUrlParser: true});
	mongoose.connection.on('open', () => {
		console.log("MongoDB: Connected");
	});
	mongoose.connection.on('error', (err) => {
		console.log("MongoDB: Error", err);
	});

	mongoose.Promise = global.Promise;
};