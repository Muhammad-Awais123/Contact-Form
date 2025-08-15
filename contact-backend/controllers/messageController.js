const Message = require('../models/messageModel');

// POST - Save message
const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: "Message saved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// GET - Fetch all messages (Admin Dashboard)
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { sendMessage, getMessages };
