const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Result } = require('../models/result');

// => localhost:3000/events/
router.get('/', (req, res) => {
    Result.find((err, docs) => {
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
    var rus = new Result({
        eventname: req.body.eventname,
        position: req.body.position,

        holdername: req.body.holdername,
        });
    rus.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Result Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var rus = {
        eventname: req.body.eventname,
        position: req.body.position,
        holdername: req.body.holdername,
       
    };
    Result.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Result Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Result.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Result Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;