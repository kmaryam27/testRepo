const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000; 
let db = require("./model");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://admin:myjs123@ds141613.mlab.com:41613/heroku_l0zsr5bb", { useNewUrlParser: true });



// Routes
// -----------------
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


app.listen(PORT, () => {console.log(`App is now listening on PORT ${PORT}`)});









