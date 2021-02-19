//   const express = require('express');
//  var router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');
// const _ = require('lodash');

// const Teacher = mongoose.model('Teacher');


// module.exports.manageteacher = (req,res,next) => {
//     var teacher = new Teacher();
//     teacher.name = req.body.name;
//     teacher.email = req.body.email;
//     teacher.contact = req.body.contact;
//     teacher.password = req.body.password;
//     teacher.save((err, doc) => {
//         if(!err)
//         res.send(doc);
//         else{
//             if (err.code == 11000)
//             res.status(422).send(['Duplicate email address found.']);
//             else
//             return next(err);
//         }
        
//     });
// }

// module.exports.authenticate = (req, res, next) => {
//     // call for passport authentication
//     passport.authenticate('local', (err, teacher, info) => {       
//         // error from passport middleware
//         if (err) return res.status(400).json(err);
//         // registered user
//         else if (teacher) return res.status(200).json({ "token": teacher.generateJwt() });
//         // unknown user or wrong password
//         else return res.status(404).json(info);
//     })(req, res);
// }

// module.exports.userProfile = (req, res, next) =>{
//     Teacher.findOne({ _id: req._id },
//         (err, teacher) => {
//             if (!teacher)
//                 return res.status(404).json({ status: false, message: 'Teacher record not found.' });
//             else
//                 return res.status(200).json({ status: true, teacher : _.pick(teacher,['name','email']) });
//         }
//     );
// }

// // var ObjectId = require('mongoose').Types.ObjectId;
// //=> localhost:3000/teachers/
// router.get('/',(req,res) => {
//     Teacher.find((err,docs) => {
// if(!err){res.send(docs);}
// else { console.log('Error in rettreiving Teachers : '+ JSON.stringify(err,undefined,2));
// }
//     });
// });

// router.get('/:id', (req,res) => {
// if(!ObjectId.isValid(req.params.id))
// return res.status(400).send('No record with given id : ${req.params.id}');

// Teacher.findById(req.params.id,(err,doc) =>{
//     if(!err){res.send(doc);}
//     else{console.log('Error in retreiving Teacher :' + JSON.stringify(err,undefined,2));}
// });
// });


// router.post('/',(req,res) => {
//     var teach = new Teacher({
//         name : req.body.name,
//         email: req.body.email,
//         contact:req.body.contact,
//         password:req.body.password,
//     });
//     teach.save((err,doc) => {
//         if(!err){res.send(doc);}
//         else { console.log('Error in Teacher save :' +JSON.stringify(err,undefined,2));}
//     });
// });

// // router.put('/:id',(req,res) => {
// // if(!ObjectId.isValid(req.params.id))
// // return res.status(400).send('No record with givan id : ${req.params.id}');

// // var teach = {
// //     name:req.body.name,
// //     email:req.body.email,
// //     contact:req.body.contact,
// //     password:req.body.password,
// // };
// // Teacher.findByIdAndUpdate(req.params.id , {$set:teach},{new:true} ,(err,doc) => {
// //     if(!err) {res.send(doc);}
// //     else {console.log('Error in Teacher Update:' + JSON.stringify(err,undefined,2));}
// // });
// // });

// // router.delete('/:id',(req,res) => {
// //     if(!ObjectId.isValid(req.params.id))
// //     return res.status(400).send('No record with givan id : ${req.params.id}');
    
// //     Teacher.findByIdAndRemove(req.params.id,(err,doc) => {
// //         if(!err) {res.send(doc);}
// //     else {console.log('Error in Teacher Delete:' + JSON.stringify(err,undefined,2));}

// //     });
// // });

// module.exports = router;
