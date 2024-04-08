const mongoose = require("mongoose");



const bookSchema = new mongoose.Schema({
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
    image: {
        type: String,
        require: false,
    },

},
    {
        timestamps: true,
    }
);

const Book = mongoose.model('Book', bookSchema)

module.exports = Book