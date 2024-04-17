const mongoose = require("mongoose");


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
    isAdmin: {
        type: Boolean,
        default: false,
    }, 
    password: {
        type: String,
        require: true,
    }
});


const User = mongoose.model('User', userSchema)

module.exports = User