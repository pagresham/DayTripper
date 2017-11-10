var mongoose = require('mongoose');
var validator = require('validator');
var userSchema = mongoose.Schema({
	
<<<<<<< HEAD
	uname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		validate: {
			validator: validator.isEmail, // this is a fboolean function?!?
			message: '{VALUE} is not a valid Email', // this is the message
			isAsync: false // this is to make it play nice with mongoose
		}
	}
=======
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
>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3

});

var User = module.exports = mongoose.model('User', userSchema);