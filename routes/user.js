var express = require('express');
var router = express.Router();

// Models
// 
// Error throwing here
var User = require('../models/users');
var Activity = require('../models/activities');
var Entry = require('../models/entries');

router.get('/user', (req, res) => {
	console.log("in the /user get route");
})








module.exports = router;