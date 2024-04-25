const Publisher = require("../models/NhaXuatBan.model");
const mongoose = require('mongoose');

exports.getPublisherByName = async (req, res) => {
    try {
        const name = req.query.name;
        
        const publisher = await Publisher.find({ name: { $regex: name, $options: 'i' } });
        if (publisher.length === 0)
            return res.status(404).json({ error: "Không tìm thấy nhà xuất bản" });
        return res.status(200).json(publisher);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find({});
        if (publishers.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy nhà xuất bản" });
        }
        return res.status(200).json(publishers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getPublisherById = async (req, res) => {
    try {
        const { id } = req.params;
        const publisher = await Publisher.findById(id);
        return res.status(200).json(publisher);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.createPublisher = async (req, res) => {
    try {
        const publisher = await Publisher.create(req.body);
        return res.status(200).json(publisher);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updatePublisher = async (req, res) => {
    try {
        const { id } = req.params;
        const publisher = await Publisher.findByIdAndUpdate(id, req.body);
        if (!publisher) {
            return res.status(404).json({ message: "Không tìm thấy nhà xuất bản" });
        }

        const updatedPublisher = await Publisher.findById(id);

        return res.status(200).json(updatedPublisher);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deletePublisher = async (req, res) => {
    try {
        const { id } = req.params;
        const publisher = await Publisher.findByIdAndDelete(id);
        if (!publisher) {
            return res.status(404).json({ message: "Không tìm thấy nhà xuất bản" });
        }

        return res.status(200).json({ message: "Xóa nhà xuất bản thành công" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
