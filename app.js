const express = require('express');
const port = 3000;

const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Models
// var User = require('./models/Users/');
// var Activity = require('./models/Activities/');
// var Entry = require('./models/Entries/');

app.use(bodyParser.json());

var user = require('./routes/user'); 
var activity = require('./routes/activity');
var entry = require('./routes/entry');

var creds = require('./creds');
console.log(creds.connectionString);

// make other route files available
app.use("/user", user);
app.use("/activity", activity);
app.use("/entry", entry);

app.listen(port, () => {
	"DayTripper: Listening on port " + port
})