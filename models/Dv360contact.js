const mongoose = require('mongoose');

const Dv360contactSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email:{type: String, required: true},
    contact:{type: String},
    message:{type: String},
    website:{type: String},
    timestamp: { type: Date, default: Date.now},
    type:{type: String}
});
mongoose.models = {};
export default mongoose.model("Dv360contact", Dv360contactSchema);