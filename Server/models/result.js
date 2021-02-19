const mongoose = require('mongoose');

var Result = mongoose.model('Result', {
    eventname: { type: String },
    position: { type: String },
    holdername: { type: String },
    
});

module.exports = { Result };