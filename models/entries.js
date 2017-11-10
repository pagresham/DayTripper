var mongoose = require('mongoose');
const validator = require('validator');
// Can I do sterilization here as well, Add slashes, or password hashing


var entrySchema = mongoose.Schema({
	// entry props go here

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
	// difficulty: {
	// 	type: Number,
	// 	required: false,
	// 	min:1,
	// 	max:10
	// },
	// city: {
	// 	type: String,
	// 	required: false,
	// 	maxlength: 1,
	// 	maxlength: 100
	// },
	// state: {
	// 	type: String,
	// 	required: false,
	// 	minlength: 1,
	// 	maxlength: 100
	// }
	
});

var Entry = module.exports = mongoose.model('Entry', entrySchema);

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
