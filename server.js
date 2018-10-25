// Imports express into our app and sets it up for use
const express = require('express');
const bodyParser = require("body-parser");
// const path = require('path');
const mongoose = require("mongoose");
// const logger = require("morgan");

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080;
let db = require("./model");


app.use(bodyParser.urlencoded({ extended: true }));/* Use body-parser for handling form submissions*/
app.use(express.urlencoded({ extended: true }));/*Sets up our server to parse our request body for usage*/
app.use(express.json());/*use json array */

// Sets our server to use the public directory for static assets
app.use(express.static('public'));


// Connect to the Mongo DB
mongoose.connect("mongodb://admin:myjs123@ds153015.mlab.com:53015/heroku_zbpc0htr", { useNewUrlParser: true });



// Routes
// -----------------
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts our server on the predefined PORT
app.listen((process.env.PORT || 8080), () => {console.log(`App is now listening on PORT ${PORT}`)});//for deploy on heroku











