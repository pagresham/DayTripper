var mongoose = require('mongoose');

// Can I do sterilization here as well, Add slashes, or password hashing


var entrySchema = mongoose.Schema({
	// entry props go here

	// name: {
	// 	type: String,
	// 	required: true,
	// 	size: {
	// 		min:1,
	// 		max:50
	// 	},
	// 	match: /[regex]/
	// },
	// description: {
	// 	type: String,
	// 	required: true,
	// 	size: {
	// 		min:1,
	// 		max:255
	// 	}
	// 	match: /[regex]/
	// }
	// rating: {
	// 	type: Number:
	// 	required: true,
	// 	min: 0,
	// 	max:10
	// }
	// difficulty: {
	// 	type: Number,
	// 	required: false,
	// 	min:1,
	// 	max:10
	// }
	// city: {
	// 	type: String,
	// 	required: false,
	// 	size: {
	// 		min:1,
	// 		max:100
	// 	}
	// 	match: /[regex]/
	// },
	// state: {
	// 	type: String,
	// 	required: false,
	// 	size: {
	// 		min:1,
	// 		max:100
	// 	}
	// 	match: /[regex]/
	// }
	// lat: {
	// 	type: Number,
	// 	required: false
	// }
	// lon: {
	// 	type: Number,
	// 	required: false
	// }
	// location: {
	// 	lat: {
	// 		type: Number,
	// 		required: false
	// 	},
	// 	lon: {
	// 		type: Number,
	// 		required: false
	// 	},
	// 	city: {
	// 		type: String,
	// 		required: false,
	// 		size: {
	// 			min:1,
	// 			max:100
	// 		}
	// 		match: /[regex]/
	// 	},
	// 	state: {
	// 		type: String,
	// 		required: false,
	// 		size: {
	// 			min:1,
	// 			max:100
	// 		}
	// 		match: /[regex]/
	// 	}
	// }


});

var Entry = module.exports = mongoose.model('Entry', entrySchema);


