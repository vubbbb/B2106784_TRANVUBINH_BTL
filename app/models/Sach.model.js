const mongoose = require("mongoose");

// Tạo mô hình sách và thêm trường tham chiếu tới mô hình nhà xuất bản
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    yearOfPublication: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    publisher: {
        type: {
            label: String,
            value: mongoose.Schema.Types.ObjectId
        },
        required: true,
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('SACH', bookSchema);

module.exports = Book;
