const mongoose = require('mongoose');

var Event = mongoose.model('Event', {
    name: { type: String },
    date: { type: Date },
    type: { type: String },
    teacher: { type: String },
    fees: { type: Number }
});

module.exports = { Event };