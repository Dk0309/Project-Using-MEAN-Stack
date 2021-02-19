const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
//const ctrlTeacher = require('../controllers/teacher.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/students/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//router.post('/authentication', ctrlTeacher.authentication);
//router.post('/manageteacher', ctrlTeacher.manageteacher);
 //router.get('/myProfile',jwtHelper.verifyJwtToken, ctrlTeacher.myProfile);

module.exports = router;