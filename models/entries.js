var mongoose = require('mongoose');
const validator = require('validator');
// Can I do sterilization here as well, Add slashes, or password hashing


// Can I do sterilization here as well, Add slashes, or password hashing


var entrySchema = mongoose.Schema({
	// entry props go here

<<<<<<< HEAD
	name: {
		type: String,
		required: [true, "Name is a required field for a n Entry!"],
		maxlength: [50, "Entry name is too long"],
		minlength: [1, "Entry name is too short"]	
	},
	email:{
	type:String,
	validate:{
	      validator: validator.isEmail,
	      message: '{VALUE} is not a valid email',
	      isAsync: false
	    }
	},
	latlon: {
		type: String,
		validate: {
			validator: validator.isLatLong,
			message: '{VALUE} is not a valid LatLon',
		}
	}
	// example of a valid latLong
	// 33.808161, -84.170196 //
	// description: {
	// 	type: String,
	// 	required: true,
	// 	minlength: [1, "Description length too short"],
	// 	maxlength: [255, "Description length too long"]
	// },
	// rating: {
	// 	type: Number,
	// 	required: true,
	// 	min: 0,
	// 	max:10
	// },
=======
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
>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3
	// difficulty: {
	// 	type: Number,
	// 	required: false,
	// 	min:1,
	// 	max:10
<<<<<<< HEAD
	// },
	// city: {
	// 	type: String,
	// 	required: false,
	// 	maxlength: 1,
	// 	maxlength: 100
=======
	// }
	// city: {
	// 	type: String,
	// 	required: false,
	// 	size: {
	// 		min:1,
	// 		max:100
	// 	}
	// 	match: /[regex]/
>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3
	// },
	// state: {
	// 	type: String,
	// 	required: false,
<<<<<<< HEAD
	// 	minlength: 1,
	// 	maxlength: 100
	// }
	
=======
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


>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3
});

var Entry = module.exports = mongoose.model('Entry', entrySchema);

<<<<<<< HEAD
// Get Activities 

module.exports.getEntries = function(callback, limit){
	Entry.find(callback).limit(limit);
}

module.exports.getEntryById = function(id, callback){
	Entry.findById(id, callback);
}

module.exports.addEntry = function(entry, callback) {
	Entry.create(entry, callback);
}

module.exports.updateEntry = function(_id, entry, options, callback) {
	var query = {_id: _id}

	var updatedEntry = {
		name: entry.name
	}

	Entry.findOneAndUpdate(query, updatedEntry, options, callback)
}
=======

>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3
