const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    message: { type: String }
 
});

module.exports = { Contact };