import mongoose from 'mongoose';

let itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    img: {
        type: String,
        required: true
    },
    gifted: {
        type: Boolean,
        default: false
    },
    guest: {
        type: String
    }
}, { timestamp: true });

export default mongoose.model('items', itemSchema);
