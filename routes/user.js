var express = require('express');
var router = express.Router();

// Models
// 
// Error throwing here
var User = require('../models/users');
var Activity = require('../models/activities');
var Entry = require('../models/entries');

var limit = 100;



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
	User.getUsers(function(err, result) {
		if(err)
			console.log(err.message) 
	
		console.log(result.length)
		res.json(result)
	}, limit)
})


// get by ID
router.get('/id/:_id', (req, res) => {
	var _id = req.params._id
	console.log("ID: " +  _id);
	User.findById(_id, function(err, result) {
		if(err) {
			console.log("DB Error at /user/find/:_id")
			// throw err
		} else {
			console.log(result);
			res.json(result)
		}
		
	})
})


// get by Username
router.get('/uname/:uname', (req, res) => {
	var uname = req.params.uname
	console.log("Uname: " +  uname);
	User.getByUserName(uname, function(err, result) {
		if(err) {
			console.log("DB Error at /user/find/:uname")
			// throw err
		} else {
			console.log(result.length);
			res.json(result)
		}
		
	})
})




// Convert to user routes

// Figure out how to pass in the qurey paramaters, like how I am using the API
// at work
// But for now, I will be happy passing them in in form data
// Try and make a little progress on the validation / token route



// post new user
router.post('/new', (req, res) => {
	
	console.log("Posting to /user/new")
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err) {
			console.log("DB Error posting to /user/new")
			console.log(err.message)
			// Need to check validation, and handle error appropriately
			res.send("nothing to see now")
		}
		else {
			console.log("User Added:  " + user);
			res.json(user)	
		}
	})
})


// update user
router.put('/new/:_id', (req, res) => {
	console.log('putting to /user/new/:_id')
	var _id = req.params._id;
	var updatedUser = req.body;
	User.updateUser(_id, updatedActivity, {}, (err, user) => {
		if(err)
			console.log(err)
		else {
			console.log(user)
			res.json(user)
		}
	})
})
// Need Delete route


router.delete('/delete/:id', (req, res) => {
	console.log('deleting to /user/delete/:_id')
	var id = req.params.id;
	User.deleteUser(id, function(err, res) {
		if (err) {
			console.log(err.message);
		}
		else {
			console.log("Deleted User # " + id);
		}
	})
})






module.exports = router;