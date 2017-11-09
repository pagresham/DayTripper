const express = require('express');
const port = 3000;

const app = express();

const validator = require('express-validator');
// import { isEmail } from 'validator';
// See this link
// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax


const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.json())

// Models
// var User = require('./models/Users/');
// var Activity = require('./models/Activities/');
// var Entry = require('./models/Entries/');

app.use(bodyParser.json());

var user = require('./routes/user'); 
var activity = require('./routes/activity');
var entry = require('./routes/entry');

var creds = require('./creds');
// console.log(creds.connectionString);
mongoose.connect(creds.connectionString)




// make other route files available
app.use("/users", user);
app.use("/", entry);




app.get('/', function(req, res) {
	console.log('in the slash route');
	res.send('in the slash route');
})

app.listen(port, () => {
	"DayTripper: Listening on port " + port
})

// mongod --dbpath '/Users/piercegresham/Google Drive/javaScriptSandbox/node_tutorials/DayTripper/data'