const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Contact } = require('../models/contact');

// => localhost:3000/events/
router.get('/', (req, res) => {
    Contact.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Contact.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var cont = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,

        
    });
    cont.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in cont Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var cont = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,

    };
    Contact.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Checkout Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;