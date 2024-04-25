const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

const Publisher = mongoose.model('NHAXUATBAN', publisherSchema);

module.exports = Publisher;