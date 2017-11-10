const express = require('express');
const port = 3000;

const app = express();

<<<<<<< HEAD

// Slashes syntax //
var slashes = require('slashes');

// slashes.add(string, [number])
// slashes.strip(string, [number])





// const validator = require('express-validator');
const validator = require('validator');
// See this link
// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// 
// https://www.npmjs.com/package/validator
=======
const validator = require('express-validator');
// import { isEmail } from 'validator';
// See this link
// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3


const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.json())

// Models
// var User = require('./models/Users/');
// var Activity = require('./models/Activities/');
// var Entry = require('./models/Entries/');

var user = require('./routes/user'); 
var index = require('./routes/index');

var creds = require('./creds');
// console.log(creds.connectionString);
mongoose.connect(creds.connectionString)


<<<<<<< HEAD

// make other route files available
app.use("/users", user);
app.use("/", index);
=======


// make other route files available
app.use("/users", user);
app.use("/", entry);

>>>>>>> 6d12386fe808b091a2134554f44b2d82e77d13c3



app.get('/', function(req, res) {
	console.log('in the slash route');
	res.send('in the slash route');
})

app.listen(port, () => {
	"DayTripper: Listening on port " + port
})

// mongod --dbpath '/Users/piercegresham/Google Drive/javaScriptSandbox/node_tutorials/DayTripper/data'