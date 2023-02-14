const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    contact:{type: String},
    role:{type: String},
    purpose:{type: String, required: true},
    requirments:{type: String, required: true},
    company:{type: String, required: true},
    timestamp: { type: Date, default: Date.now}
});
mongoose.models = {};
export default mongoose.model("Contact", ContactSchema);