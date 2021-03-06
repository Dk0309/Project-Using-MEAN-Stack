const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Event } = require('../models/event');

// => localhost:3000/events/
router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var eve = new Event({
        name: req.body.name,
        date: req.body.date,

        type: req.body.type,
        teacher: req.body.teacher,
        fees: req.body.fees,
    });
    eve.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var eve = {
        name: req.body.name,
        date: req.body.date,
        type: req.body.type,
        teacher: req.body.teacher,
        fees: req.body.fees,
    };
    Event.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;