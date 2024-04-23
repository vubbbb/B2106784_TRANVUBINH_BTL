const Order = require('../models/Order.model');
const Book = require('../models/Book.model');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
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
        const { token, bookId, quantity } = req.body;
        userToken = jwt.verify(token, process.env.JWT_ACCESS_KEY);
        const userId = userToken.id;
        const userName = userToken.name;
        const address = userToken.address;
        // Kiểm tra xem số lượng sách còn đủ để mượn không
        const book = await Book.findById(bookId);
        if (!book || book.quantity < quantity) {
            return res.status(400).json({ message: 'Sách không có sẵn hoặc số lượng không đáp ứng đủ nhu cầu' });
        }
        bookName = book.name;
        // Tạo đơn đặt hàng mới
        const order = new Order({ userId, userName, bookId, bookName, address, quantity });
        await order.save();

        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn đặt hàng' });
    }
};



exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.query.Id;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }



        order.status = "rejected";
        await order.save();

        res.status(200).json({ message: "Order cancelled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateOrder = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        // Find the order by ID
        const order = await Order.findById(orderId);

        // Check if the order exists
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        const bookId = order.bookId;
        const book = await Book.findById(bookId);

        if (status === "approved" && book.quantity > order.quantity) {
            book.quantity = book.quantity - order.quantity;
            await book.save();
        }
        else if (order.status === "approved" && status === "completed") {
            book.quantity = book.quantity + order.quantity;
            await book.save();
        } else if (order.status === "approved" && status === "rejected") {
            book.quantity = book.quantity + order.quantity;
            await book.save();
        }


        // Update the order status
        order.status = status; // Assuming the status is passed in the request body

        // Save the updated order
        await order.save();



        res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

