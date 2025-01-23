const mongoose = require('mongoose');

const ChatBotLead = new mongoose.Schema({
    option: { type: String, required: true },
    subOption: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    requirement : {type : String},
    timestamp: { type: Date, default: Date.now }
});
mongoose.models = {};
export default mongoose.model("ChatBotleads", ChatBotLead);