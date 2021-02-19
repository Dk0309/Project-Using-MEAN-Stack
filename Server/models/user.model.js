const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: { 
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4,'Password must be atleast 4 character long']
    },
    mobilenumber: {
        type : String,
        required: 'MobileNumber can\'t be empty'
    },
    city: {
        type: String,
        required: 'City can\'t be empty'
    },
    state: {
        type: String,
        required: 'State can\'t be empty'
    },
    pincode: {
        type: String
    },
    country: {
        type: String,
        required: 'Country can\'t be empty'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty'
    },
    saltSecret: String

});


userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) =>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User', userSchema);