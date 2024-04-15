const mongoose = require("mongoose");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    birthDay: {
        type: Date,
        require: true,
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other', 'unknown'],
            massage: '{VALUE} is not supported'
        },
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    phoneNumber: {
        type: String,
        // validate: {
        //     validator: (phoneNumber) => phoneNumber.length > 9,
        //     massage: 'Phone number is incorrect format'
        // },
        require: true,
    },
    created: {
        type: Date,
        require: true,
        default: Date.now
    },
    hash: String,
    salt: String
});

//save the reference to the password
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Checking the password
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Generate JWT
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };
const User = mongoose.model('User', userSchema)

module.exports = User