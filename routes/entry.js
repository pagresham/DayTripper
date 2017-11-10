// var express = require('express');
// var router = express.Router();

// var limit = 100;

// // Models
// var User = require('../models/users');
// var Activity = require('../models/activities');
// var Entry = require('../models/entries');

// router.get('/', function(req, res) {
// 	res.send('Please use the /api/ endpoints');
// })

// router.get('/api/entry', function(req, res) {
// 	res.send('in the entry.js / route');
// })


// // get all activities
// router.get('/api/activity', function(req, res) {
// 	// res.send('oh yeah')
// 	Activity.getActivities(function(err, result) {
// 		if(err)
// 			console.log(err) 
// 		// result.forEach((it)=> {
// 		// 	console.log(it)
// 		// })
// 		res.json(result)
// 	}, limit)
// })

// router.get('/api/activity/:_id', (req, res) => {
// 	var _id = req.params._id
// 	Activity.getActivitiesById(_id, function(err, result) {
// 		if(err)
// 			throw err
// 		console.log(result)
// 		res.json(result)
// 	})
// })

// router.post('/api/activity', (req, res) => {
// 	var activity = req.body;
// 	console.log("Posting to /api/activity")


// 	Activity.addActivity(activity, (err, activity) => {
// 		if(err)
// 			throw err
// 		console.log("Activity Added:  " + activity)
// 		res.json(activity)
// 	})
// })

// router.put('/api/activity/:_id', (req, res) => {
// 	console.log('putting to api/activity/:_id')
// 	var _id = req.params._id;
// 	var updatedActivity = req.body;
// 	Activity.updateActivity(_id, updatedActivity, {}, (err, activity) => {
// 		if(err)
// 			console.log(err)
// 		else {
// 			console.log(activity)
// 			res.json(activity)
// 		}
// 	})
// })





// module.exports = router;