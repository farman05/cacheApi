require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080
const app = express();
const mongoose = require('mongoose');
const {DB} = require('./config/constant')
const routes = require('./routes')
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected')
    }
})

//api routes
app.use("/api", routes);



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});