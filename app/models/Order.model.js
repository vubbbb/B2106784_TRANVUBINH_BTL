const mongoose = require('mongoose');
// ...

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    startDate: {
        type: Date,
        require: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
        default: function () {
            return new Date(this.startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
        }
    }
});

// ...
const Order = mongoose.model('Order', orderSchema)
module.exports = Order;