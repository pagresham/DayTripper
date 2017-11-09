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
})

router.get('/another', function(req, res) {
	res.send('in the /another route')
})








module.exports = router;