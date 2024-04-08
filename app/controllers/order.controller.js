const Order = require('../models/Order.model');

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserOrder = async (req, res) => {
    try {
        const userId = req.query.userId;
        console.log(userId);
        const orders = await Order.find({ userId: userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelOrder = (req, res) => {
    res.send({ message: "updateBook handler" });
};

exports.cancelOrder = (req, res) => {
    res.send({massage: "updateBook handler"});
};


