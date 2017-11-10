var express = require('express');
var router = express.Router();
var validator = require('validator');
var limit = 100;

// Import Models
var User = require('../models/users');
var Activity = require('../models/activities');
var Entry = require('../models/entries');

var slash = require('slashes');









router.get('/', function(req, res) {
	console.log(validator.isEmail('foo@bar.com'))
	res.send('Please use the /api/ endpointsfasd');
})


// -- Start Routes -- //



router.get('/slashtest', (req, res) => {

	var slashed = slash.add("string'ToSlash");
	var unslashed = slash.strip("string\'ToStrip");

	var output = "";
	var cnt = "hadn't";
	output += cnt + "<br>";
	console.log(cnt);
	var slashed = slash.add(cnt);
	output += slashed + "<br>";
	console.log(slashed);
	var unslashed = slash.strip(slashed);
	output += unslashed + "<br>";
	console.log(unslashed);	
	res.send(output);

});



// =====  activities  ===== // 

// get all
router.get('/api/activity', function(req, res) {
	// res.send('oh yeah')
	Activity.getActivities(function(err, result) {
		if(err)
			console.log(err.message) 
		// result.forEach((it)=> {
		// 	console.log(it)
		// })
		res.json(result)
	}, limit)
})


// get all by ID
router.get('/api/activity/:_id', (req, res) => {
	var _id = req.params._id
	Activity.getActivitiesById(_id, function(err, result) {
		if(err)
			throw err
		console.log(result)
		res.json(result)
	})
})


// post new activity
router.post('/api/activity', (req, res) => {
	var activity = req.body;
	console.log("Posting to /api/activity")


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


// =====  entries  ===== //

// get all entries
router.get('/api/entry', function(req, res) {
	// res.send('oh yeah')
	Entry.getEntries(function(err, result) {
		if(err)
			console.log(err) 
		// result.forEach((it)=> {
		// 	console.log(it)
		// })
		res.json(result)
	}, limit)
})

// get entry by ID
router.get('/api/entry/:_id', (req, res) => {
	var _id = req.params._id
	Entry.getEntryById(_id, function(err, result) {
		if(err)
			throw err
		console.log(result)
		res.json(result)
	})
})

// post new entry
router.post('/api/entry', (req, res) => {
	var entry = req.body;
	console.log("Posting to /api/entry")


	Entry.addEntry(entry, (err, entry) => {
		if(err) {
			console.log("DB Error posting to /api/entry")
			console.log(err.message)
			// Need to check validation, and handle error appropriately
		}
		else {
			console.log("Entry Added:  " + entry)
			res.json(entry)	
		}
		
	})
})

// Update entry
router.put('/api/entry/:_id', (req, res) => {
	console.log('putting to api/entry/:_id')
	var _id = req.params._id;
	var updatedEntry = req.body;
	Entry.updateEntry(_id, updatedEntry, {}, (err, entry) => {
		if(err)
			console.log(err)
		else {
			console.log(entry)
			res.json(entry)
		}
	})
})

// Need Delete Entry





module.exports = router;