var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	
	// uname: {
	// 	type: String,
	// 	required: true
	// },
	// password: {
	// 	type: String,
	// 	required: true
	// }
	// email: {
	// 	type: String,
	// 	required: true,
	// 	format: email
	// }

});

var User = module.exports = mongoose.model('User', userSchema);