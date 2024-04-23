const Book = require("../models/Book.model")
const mongoose = require('mongoose')




exports.getBookByName = async (req, res) => {
    try {
        const name = req.query.name;

        const book = await Book.find({ name: { $regex: name, $options: 'i' } });
        if (book.length === 0)
            return res.status(404).json({ error: "khong tim thay san pham" });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
};

exports.createBook = async (req, res) => {
    try {
        const { name, author, cost, quantity, yearOfPublication, image, publisher } = req.body;
        const { label, value } = publisher;

        // Tạo mới cuốn sách
        const book = await Book.create({
            name,
            author,
            cost,
            quantity,
            yearOfPublication,
            image,
            publisher: {
                label,
                value
            }
        });

        console.log(book);
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
};





exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if (!book) {
            return res.status(404).json({ massage: "Book not found" });
        }

        const updatedbook = await Book.findById(id);

        return res.status(200).json(updatedbook);
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ massage: "Book not found" });
        }

        return res.status(200).json({ massage: "Book deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
};

