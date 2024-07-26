const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    sender_id: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    receiver_id: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model('chat_data', chatSchema);