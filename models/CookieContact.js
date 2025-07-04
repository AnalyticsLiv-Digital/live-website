const mongoose = require('mongoose');

const CookieContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String },
    company: { type: String },
    timestamp: { type: Date, default: Date.now },
    profession: { type: String },
    type: { type: String },
});
mongoose.models = {};
export default mongoose.model("CookieContact", CookieContactSchema);