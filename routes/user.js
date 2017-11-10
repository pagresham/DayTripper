var express = require('express');
var router = express.Router();

// Models
// 
// Error throwing here
var User = require('../models/users');
var Activity = require('../models/activities');
var Entry = require('../models/entries');




router.get('/', (req, res) => {
	res.send('in the /user route')
	console.log("in the /user get route");
});



// the real route is /user/validate, but the /user is dropped in this file //
router.post('/validate/:un/:pw', (req, res) => {
	var un = req.params.un;
	var pw = req.params.pw;
	console.log("in the /user/validate route: pw: " + pw + " and un: " + un);
	res.send("in the /user/validate route")
});





// =====  users  ===== // 

// get all
router.get('/all', function(req, res) {
	// res.send('oh yeah')
	User.getUsers(function(err, result) {
		if(err)
			console.log(err.message) 
		

		// Remove Slashes //
		// for(let entry of result) {
		// 	entry.name = slash.strip(entry.name);
		// }
		res.json(result)
	}, limit)
})


// get all ID
router.get('/api/activity/:_id', (req, res) => {
	var _id = req.params._id
	Activity.getActivitiesById(_id, function(err, result) {
		if(err)
			throw err
		console.log(result)
		// Remove Slashes //
		// for(let entry of result) {
		// 	entry.name = slash.strip(entry.name);
		// }
		res.json(result)
	})
})


// post new activity
router.post('/api/activity', (req, res) => {
	
	console.log("Posting to /api/activity")
	var activity = req.body;
	Activity.addActivity(activity, (err, activity) => {
		if(err) {
			console.log("DB Error posting to /api/activity")
			console.log(err.message)
			// Need to check validation, and handle error appropriately
			res.send("nothing to see now")
		}
		else {
			console.log("Activity Added:  " + activity)
			res.json(activity)	
		}
		
	})
})


// update activity
router.put('/api/activity/:_id', (req, res) => {
	console.log('putting to api/activity/:_id')
	var _id = req.params._id;
	var updatedActivity = req.body;
	Activity.updateActivity(_id, updatedActivity, {}, (err, activity) => {
		if(err)
			console.log(err)
		else {
			console.log(activity)
			res.json(activity)
		}
	})
})
// Need Delete route


router.delete('/api/activity/:id', (req, res) => {
	var id = req.params.id;
	Activity.deleteActivity(id, function(err, res) {
		if (err) {
			console.log(err.message);
		}
		else {
			console.log("Deleted Activity # " + id);
		}
	})
})






module.exports = router;