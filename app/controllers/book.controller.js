const Book = require("../models/Book.model")
const mongoose = require('mongoose')



exports.getAllBooks = (req, res) => {
    res.send({massage: "getAllBooks handler"});
};

exports.getBookById = (req, res) => {
    res.send({massage: "getSingleBook handler"});
};

exports.createBook = async (req, res) => {
    try{
        const book = await Book.create(req.body); 
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.updateBook = (req, res) => {
    res.send({massage: "updateBook handler"});
};

exports.deleteBook = (req, res) => {
    res.send({massage: "deleteBook handler"});
};

exports.getBookCount = (req, res) => {
    res.send({massage: "deleteBook handler"});
};
