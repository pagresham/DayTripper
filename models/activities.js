var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Activity = module.exports = mongoose.model('Activity', activitySchema);

// Get Activities 

module.exports.getActivities = function(callback, limit){
	Activity.find(callback).limit(limit);
}

module.exports.getActivitiesById = function(id, callback){
	Activity.findById(id, callback);
}

module.exports.addActivity = function(activity, callback) {
	Activity.create(activity, callback);
}

module.exports.updateActivity = function(_id, activity, options, callback) {
	var query = {_id: _id}

	var updatedActivity = {
		name: activity.name
	}

	Activity.findOneAndUpdate(query, updateActivity, options, callback)
}




