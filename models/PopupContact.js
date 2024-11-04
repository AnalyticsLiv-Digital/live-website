const mongoose = require('mongoose');

const PopupContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String },
    timestamp: { type: Date, default: Date.now }
});
mongoose.models = {};
export default mongoose.model("PopupContact", PopupContactSchema);