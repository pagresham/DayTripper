var mongoose = require('mongoose');
var validator = require('validator');
var userSchema = mongoose.Schema({
	
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

});

var User = module.exports = mongoose.model('User', userSchema);