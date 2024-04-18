const User = require("../models/User.model")
const mongoose = require('mongoose')


exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.massage });
    }
};

exports.changePassword = (req, res) => {
    res.send({ massage: "changePassword" });
};

exports.getUserInfoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.massage });
    }
};



exports.changeUserInfo = (req, res) => {
    res.send({ massage: "changeUserInfo " });
};

exports.getUserOrder = (req, res) => {
    res.send({ massage: "getUserOrder" });
};

exports.addOrder = (req, res) => {
    res.send({ massage: "addOrder " });
};

exports.updateBookInOrder = (req, res) => {
    res.send({ massage: "updateBookInOrder" });
};

exports.removeBook = (req, res) => {
    res.send({ massage: "removeBook" });
};
