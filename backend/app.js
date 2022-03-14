/* 
    1. INCLUDE DEPENDENCIES
*/
const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

/* 
    1a. DECLARE OTHER VARS
*/
const logFile = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


/* 
    2. INIT EXPRESS
*/
const app = express();

/* 
    3. MAKE CONFIG CHANGES
*/
app.disable('x-powered-by');


/* 
    4. SET UP MIDDLEWARE
*/
// Accept cross-domain XHR requests
app.use(cors());

// Log all requests
app.use(logger('common', {stream: logFile}));

// Forward requests to /pictures/* for static images to /assets/pics/*
app.use('/pictures', express.static(path.join(__dirname, 'assets', 'pics')));

// Add JSON body parsing to all routes
app.use(express.json());


/* 
    5. SET UP ROUTING
*/


/* 
    6. SET UP ERROR HANDLERS
*/
app.use((err, req, res, next) => {
    //res.status(400).json({error: err.message});
});


/* 
    7. INITIALIZE SERVER AND LISTEN ON THE PROVIDED PORT 
*/
