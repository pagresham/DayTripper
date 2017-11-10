// Starts mongod locally 
// $ mongod --dbpath '/Users/piercegresham/Google Drive/javaScriptSandbox/node_tutorials_copy/DayTripper/data'

const express = require('express');
const port = 3000;

const app = express();



// Slashes syntax //
var slashes = require('slashes'); // dont need here
var urlencode = require('urlencode'); // dont need here
// urlencode(unCodedString)
// urlencode.decode(codedString)

// slashes.add(string, [number])
// slashes.strip(string, [number])
const validator = require('validator'); // dont need here
// See this link
// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// 
// https://www.npmjs.com/package/validator

const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.json())


var creds = require('./creds');
// console.log(creds.connectionString);
mongoose.connect(creds.connectionString)

var user = require('./routes/user'); 
var index = require('./routes/index');




// make other route files available
app.use("/user", user);
app.use("/", index);






app.get('/', function(req, res) {
	console.log('in the slash route');
	res.send('in the slash route');
})

app.listen(port, () => {
	"DayTripper: Listening on port " + port
})

// mongod --dbpath '/Users/piercegresham/Google Drive/javaScriptSandbox/node_tutorials/DayTripper/data'