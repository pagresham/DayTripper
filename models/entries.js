var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
	// entry props go here
});

var Entry = module.exports = mongoose.model('Entry', entrySchema);