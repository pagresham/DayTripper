var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	// user props go here
});

var User = module.exports = mongoose.model('User', userSchema);