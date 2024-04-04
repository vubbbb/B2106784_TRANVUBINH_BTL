const mongoose = require("mongoose");
import {Schema, ObjectId } from 'mongoose';



export default mongoose.model('Book',
    new Schema({
        id: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        cost: {
            type: Number,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        yearOfPublication: {
            type: Date,
            require: false,
        },
        
    })
)