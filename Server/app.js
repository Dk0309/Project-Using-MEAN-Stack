require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const rtsIndex = require('./routes/index.router');
//var teacherController = require('./controllers/teacherController.js');
var eventController = require('./controllers/event.controller.js');
var checkoutController = require('./controllers/checkout.controller.js');
var resultController = require('./controllers/result.controller.js');
var contactController = require('./controllers/contact.controller.js');

var app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api',rtsIndex);
app.use('/events', eventController);
 //app.use('/teachers',teacherController);
app.use('/checkouts',checkoutController);
app.use('/contacts',contactController);
app.use('/results',resultController);

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));