const User = require("../models/NguoiDung.model")
const Order = require("../models/TheoDoiMuonSach.model")
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");


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
        // Lấy token từ headers
        const token = req.headers.token.split(" ")[1];
        // Giải mã token để lấy ID người dùng
        const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_KEY);
        const userId = decodedToken.id;

        // Tìm kiếm thông tin người dùng bằng ID
        const user = await User.findById(userId);

        // Kiểm tra xem người dùng có tồn tại hay không
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Trả về thông tin người dùng
        res.status(200).json(user);
    } catch (error) {
        // Xử lý lỗi nếu có
        res.status(500).json({ message: error.message });
    }
};



exports.changeUserInfo = (req, res) => {
    res.send({ massage: "changeUserInfo " });
};

exports.getUserOrder = async (req, res) => {
    try {
        const token = req.headers.token.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_KEY);
        const userId = decodedToken.id;
        
        const orders = await Order.find({ userId: userId });
        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "Empty" });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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
