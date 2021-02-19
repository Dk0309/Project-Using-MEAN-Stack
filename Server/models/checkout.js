const mongoose = require('mongoose');

var Checkout = mongoose.model('Checkout', {
    name: { type: String },
    event: { type: String }
    
});

module.exports = { Checkout };